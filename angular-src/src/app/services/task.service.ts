import { Injectable, isDevMode } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { AuthService } from "./auth.service";
import "rxjs/add/operator/map"

@Injectable()
export class TaskService {

  url: string;

  constructor(private http: Http, private authService: AuthService) {
    if(isDevMode()) {
      this.url = "http://localhost:8080/";
    } else {
      this.url = "";
    }
  }

  getTasks(active) {
    this.authService.loadUserJWT();
    let endpoint = (active) ? "get-active" : "get-archived";

    let headers = new Headers();
    headers.append("Authorization", this.authService.token);

    let params = new URLSearchParams();
    params.set("userid", this.authService.user._id);

    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    requestOptions.headers = headers;

    return this.http.get(this.url + "tasks/" + endpoint, requestOptions)
      .map(res => res.json());
  }

  getAllTasks() {
    this.authService.loadUserJWT();

    let headers = new Headers();
    headers.append("Authorization", this.authService.token);

    let params = new URLSearchParams();
    params.set("userid", this.authService.user._id);

    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    requestOptions.headers = headers;

    return this.http.get(this.url + "tasks/get-all", requestOptions)
      .map(res => res.json());
  }

  addTask(name: String, description: String) {
    this.authService.loadUserJWT();
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.authService.token);

    let content = JSON.stringify({
      name: name,
      description: description,
      userid: this.authService.user._id
    });

    return this.http.post(this.url + "tasks/add", content, {headers: headers})
      .map(res => res.json());
  }

  removeTask(id: String) {
    this.authService.loadUserJWT();
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.authService.token);

    let content = JSON.stringify({
      id: id
    });

    return this.http.post(this.url + "tasks/remove", content, {headers: headers})
      .map(res => res.json());
  }

  changeTaskStatus(id: String, active: Boolean) {
    this.authService.loadUserJWT();
    let endpoint = (active) ? "archive" : "activate";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.authService.token);

    let content = JSON.stringify({
      id: id
    });

    return this.http.post(this.url + "tasks/" + endpoint, content, {headers: headers})
      .map(res => res.json());
  }

  updateTask(id: string, amount: number, length: number) {
    this.authService.loadUserJWT();
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.authService.token);

    let content = JSON.stringify({
      id: id,
      amount: amount,
      length: length
    });

    return this.http.post(this.url + "tasks/update", content, {headers: headers})
      .map(res => res.json());
  }

}
