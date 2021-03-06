import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { TaskService } from '../../services/task.service';
import { Task } from "../../interfaces/task.interface";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-new-pomodoro',
  templateUrl: './new-pomodoro.component.html',
  styleUrls: ['./new-pomodoro.component.css']
})
export class NewPomodoroComponent implements OnInit {

  // Booleans to control ui
  pomodoroStart: boolean;

  // Form options
  pomodoroLength: number;
  shortBreakLength: number;
  longBreakLength: number;

  // Inputs to timer component
  timerStart: number;
  timerStatus: string;

  // Counters for pomodoro and break determination
  breaks: number[];
  roundCounter: number;
  pomodoroCount: number;
  breakCount: number;
  currentPomodoroCount: number;

  // Tasks to choose from
  tasks: Task[];
  chosenTask: number;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private authService: AuthService
  ) {

    this.taskService.getTasks(true).subscribe(
      (tasks) => {
        this.tasks = tasks
      }
    );

    this.pomodoroStart = false;
    this.pomodoroLength = 25;
    this.shortBreakLength = 5;
    this.longBreakLength = 15;
    this.roundCounter = this.authService.user.rounds;
    if(this.roundCounter % 2 == 0) this.roundCounter++;
    this.pomodoroCount = Math.ceil(this.roundCounter / 2) % 4;
    if(this.pomodoroCount == 0) this.pomodoroCount++;
    this.breakCount = this.pomodoroCount - 1;
    this.currentPomodoroCount = 1;
  }

  updateTimer() {
    if(this.roundCounter % 2 == 1) {
      this.timerStatus = this.tasks[this.chosenTask].name + ": Pomodoro " + this.pomodoroCount++;
      this.currentPomodoroCount++;
      this.setTimer(this.pomodoroLength);
    } else {
      this.timerStatus = this.tasks[this.chosenTask].name + ": Break " + (this.breakCount + 1);
      this.setTimer(this.breaks[this.breakCount++ % 4]);
    }
  }

  startTimer() {
    // Validation
    if(this.chosenTask == undefined) {
      alert("You must choose a task. If one does not exist, create one.");
      return;
    }

    // Timer initialization
    this.pomodoroLength *= 60;
    this.shortBreakLength *= 60;
    this.longBreakLength *= 60;
    this.breaks = [this.shortBreakLength, this.shortBreakLength, this.shortBreakLength, this.longBreakLength];
    this.updateTimer();
    this.pomodoroStart = true;
  }

  setTimer(start: number) {
    this.timerStart = start;
  }

  onTimerChange(event: any) {
    let compareValue = (this.roundCounter % 2 == 1) ? this.pomodoroLength : this.breaks[(this.breakCount - 1) % 4];
    if(event.timeEllapsed > compareValue && !event.isPaused) {
      this.roundCounter++;
      this.updateTimer();
    }

    // Update task in database when the timer is stopped
    if(event.isStopped) {
      let id = this.tasks[this.chosenTask]._id;
      let amount = this.currentPomodoroCount - 2;
      if(this.roundCounter % 2 == 1) {
        amount += event.fraction;
      } else {
        amount += 1;
      }
      let length = this.pomodoroLength / 60;
      this.taskService.updateTask(id, amount, length).subscribe(
        (data) => {
          if(!data.success) {
            alert("Task update failed!");
          }
          this.authService.updateRounds(this.roundCounter).subscribe(
            (data) => {
              if(!data.success) {
                alert("Rounds update failed!")
              }
              this.router.navigate(["/dashboard"]);
            }
          );
        }
      );
    }
  }

  ngOnInit() {
  }

}
