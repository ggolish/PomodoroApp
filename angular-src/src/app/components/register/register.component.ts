import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.registerUser(this.email, this.username, this.password).subscribe(
      (data) => {
        if(!data.success) {
          alert("Registration failed!");
          this.router.navigate(["/register"]);
        } else {
          this.router.navigate(["/login"]);
        }
      }
    );
  }

}
