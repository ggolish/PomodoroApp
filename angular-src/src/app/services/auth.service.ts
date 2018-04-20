import { Injectable, isDevMode } from '@angular/core';
import { Http, Headers } from '@angular/http';
import "rxjs/add/operator/map"

@Injectable()
export class AuthService {

  url: string;

  constructor(private http: Http) {
    if(isDevMode()) {
      this.url = "http://localhost:8080/";
    } else {
      this.url = "";
    }
  }

  registerUser(email: string, username: string, password: string) {
    let endpoint = this.url + "users/register";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let content = JSON.stringify({
      email: email,
      username: username,
      password: password
    });
    return this.http.post(endpoint, content, {headers: headers}).map(res => res.json())
  }

  loginUser() {

  }

}
