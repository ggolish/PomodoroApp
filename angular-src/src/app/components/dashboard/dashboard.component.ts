import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from "../../interfaces/task.interface";

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

  constructor(private taskService: TaskService) {
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

  ngOnInit() {
  }

}
