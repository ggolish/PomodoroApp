import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log({
      email: this.email,
      username: this.username,
      password: this.password
    });
  }

}
