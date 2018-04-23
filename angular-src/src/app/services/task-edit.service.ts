import { Injectable } from '@angular/core';
import { Task } from "../interfaces/task.interface";

@Injectable()
export class TaskEditService {

  public edit: boolean;
  public task: Task;

  constructor() { }

  editTask(task: Task) {
    this.edit = true;
    this.task = task;
  }

}
