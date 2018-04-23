import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from "../../services/task.service";
import { TaskEditService } from "../../services/task-edit.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  name: String;
  description: String;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private taskEditService: TaskEditService
  ) {
    if(this.taskEditService.edit) {
      this.name = this.taskEditService.task.name;
      this.description = this.taskEditService.task.description;
    }
  }

  addTask() {
    if(this.taskEditService.edit) {
      this.taskEditService.edit = false;
      this.taskService.editTask(this.taskEditService.task._id, this.name, this.description).subscribe(
        (data) => {
          if(data.success) {
            this.router.navigate(["/dashboard"]);
          } else {
            alert("Unable to edit task!");
            this.router.navigate(["/dashboard"]);
          }
        }
      );
    } else {
      this.taskService.addTask(this.name, this.description).subscribe(
        (data) => {
          if(data.success) {
            this.router.navigate(["/dashboard"]);
          } else {
            alert("Unable to add task!");
            this.router.navigate(["/add-task"]);
          }
        }
      );
    }
  }

  ngOnInit() {
  }

}
