import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TaskService } from '../../services/task.service';
import { Task } from "../../interfaces/task.interface";
import { TaskEditService } from "../../services/task-edit.service";
import { FormatService } from "../../services/format.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  activeTasks: Task[];
  archivedTasks: Task[];
  pomodoroSum: number;
  minuteSum: number;

  constructor(
    private taskService: TaskService,
    private taskEditService: TaskEditService,
    private router: Router,
    private format: FormatService
  ) {
    this.activeTasks = this.archivedTasks = [];
    this.pomodoroSum = 0;
    this.updateTasks();
  }

  updateTasks() {
    this.pomodoroSum = 0;
    this.minuteSum = 0;
    this.taskService.getTasks(true).subscribe(
      (tasks) => {
        this.activeTasks = tasks
        for(let i = 0; i < this.activeTasks.length; ++i) {
          this.activeTasks[i].displayDescription = false;
          for(let j = 0; j < this.activeTasks[i].pomodoros.length; ++j) {
            this.pomodoroSum = this.pomodoroSum + this.activeTasks[i].pomodoros[j].amount;
            this.minuteSum += this.activeTasks[i].pomodoros[j].amount * this.activeTasks[i].pomodoros[j].length;
          }
        }
      }
    );
    this.taskService.getTasks(false).subscribe(
      (tasks) => {
        this.archivedTasks = tasks
        for(let i = 0; i < this.archivedTasks.length; ++i) {
          this.archivedTasks[i].displayDescription = false;
          for(let j = 0; j < this.archivedTasks[i].pomodoros.length; ++j) {
            this.pomodoroSum += this.archivedTasks[i].pomodoros[j].amount;
            this.minuteSum += this.archivedTasks[i].pomodoros[j].amount * this.archivedTasks[i].pomodoros[j].length;
          }
        }
      }
    );
  }

  deleteTask(id) {
    this.taskService.removeTask(id).subscribe(
      (data) => {
        if(data.success) {
          this.updateTasks();
        } else {
          alert("Unable to remove task!");
        }
      }
    );
  }

  archiveTask(id) {
    this.taskService.changeTaskStatus(id, true).subscribe(
      (data) => {
        if(data.success) {
          this.updateTasks();
        } else {
          alert("Unable to remove task!");
        }
      }
    );
  }

  activateTask(id) {
    this.taskService.changeTaskStatus(id, false).subscribe(
      (data) => {
        if(data.success) {
          this.updateTasks();
        } else {
          alert("Unable to remove task!");
        }
      }
    );
  }

  editTask(task) {
    this.taskEditService.editTask(task);
    this.router.navigate(["/new-task"]);
  }

  getDate(task: Task) {
    if(task.pomodoros.length > 0) {
      let d = task.pomodoros[task.pomodoros.length - 1].date;
      return this.format.getDateString(d) + " " + this.format.getTimeString(d);
    }
    return " ---";
  }

  ngOnInit() {
  }

}
