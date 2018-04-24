import { Injectable, isDevMode } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from "angular2-jwt";
import { User } from "../interfaces/user.interface";
import "rxjs/add/operator/map"

@Injectable()
export class AuthService {

  url: string;
  token: string;
  user: User;

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

  loginUser(username: string, password: string) {
    let endpoint = this.url + "users/login";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let content = JSON.stringify({
      username: username,
      password: password
    });
    return this.http.post(endpoint, content, {headers: headers}).map(res => res.json())
  }

  logoutUser() {
    this.user = null;
    this.token = null;
    localStorage.clear();
  }

  storeUserJWT(user: User, token: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  storeUser() {
    localStorage.setItem("user", JSON.stringify(this.user));
  }

  loadUserJWT() {
    this.token = localStorage.getItem("token");
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  loggedIn() {
    return tokenNotExpired();
  }

  updateRounds(rounds: number) {
    this.loadUserJWT();

    this.user.rounds = rounds;
    this.storeUser();

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", this.token);

    let content = JSON.stringify({
      id: this.user._id,
      rounds: rounds
    });

    return this.http.post(this.url + "users/update-rounds", content, {headers: headers})
      .map(res => res.json());
  }

}
