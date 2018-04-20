import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  username: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log({
      email: this.email,
      username: this.username,
      password: this.password
    });
    this.authService.registerUser(this.email, this.username, this.password).subscribe(
      (data) => {
        if(!data.success) {
          alert("Registration failed!");
        }
      }
    );
  }

}
