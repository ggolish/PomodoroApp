import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import "rxjs/add/operator/map"

@Injectable()
export class TaskService {

  constructor(private http: Http) { }

  getTasks(active) {
    let endpoint = (active) ? "get-active" : "get-archived";
    return this.http.get("http://localhost:3000/tasks/" + endpoint)
      .map(res => res.json());
  }

  addTask(name: String, description: String) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let content = JSON.stringify({
      name: name,
      description: description
    });

    return this.http.post("http://localhost:3000/tasks/add", content, {headers: headers})
      .map(res => res.json());
  }

  removeTask(id: String) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let content = JSON.stringify({
      id: id
    });

    return this.http.post("http://localhost:3000/tasks/remove", content, {headers: headers})
      .map(res => res.json());
  }

  changeTaskStatus(id: String, active: Boolean) {
    let endpoint = (active) ? "archive" : "activate";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let content = JSON.stringify({
      id: id
    });

    return this.http.post("http://localhost:3000/tasks/" + endpoint, content, {headers: headers})
      .map(res => res.json());
  }

  updateTask(id: string, amount: number, length: number) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let content = JSON.stringify({
      id: id,
      amount: amount,
      length: length
    });

    return this.http.post("http://localhost:3000/tasks/update", content, {headers: headers})
      .map(res => res.json());
  }

}
