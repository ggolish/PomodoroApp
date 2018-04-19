import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  name: String;
  description: String;

  constructor(private router: Router, private taskService: TaskService) { }

  addTask() {
    this.taskService.addTask(this.name, this.description)
      .subscribe(
        (data) => {
          if(data.success) {
            this.router.navigate(["/dashboard"]);
          } else {
            alert("Unable to add task!");
            this.router.navigate(["/add-task"]);
          }
        }
      )
  }

  ngOnInit() {
  }

}
