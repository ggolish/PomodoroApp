import { Injectable, isDevMode } from '@angular/core';
import { Http, Headers } from '@angular/http';
import "rxjs/add/operator/map"

@Injectable()
export class TaskService {

  url: string;

  constructor(private http: Http) {
    if(isDevMode()) {
      this.url = "http://localhost:8080/";
    } else {
      this.url = "";
    }
  }

  getTasks(active) {
    let endpoint = (active) ? "get-active" : "get-archived";
    return this.http.get(this.url + "tasks/" + endpoint)
      .map(res => res.json());
  }

  addTask(name: String, description: String) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let content = JSON.stringify({
      name: name,
      description: description
    });

    return this.http.post(this.url + "tasks/add", content, {headers: headers})
      .map(res => res.json());
  }

  removeTask(id: String) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let content = JSON.stringify({
      id: id
    });

    return this.http.post(this.url + "tasks/remove", content, {headers: headers})
      .map(res => res.json());
  }

  changeTaskStatus(id: String, active: Boolean) {
    let endpoint = (active) ? "archive" : "activate";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let content = JSON.stringify({
      id: id
    });

    return this.http.post(this.url + "tasks/" + endpoint, content, {headers: headers})
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

    return this.http.post(this.url + "tasks/update", content, {headers: headers})
      .map(res => res.json());
  }

}
