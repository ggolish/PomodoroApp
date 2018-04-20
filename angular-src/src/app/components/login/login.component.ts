import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.loginUser(this.username, this.password).subscribe(
      (data) => {
        if(data.success) {
          this.authService.storeUserJWT(data.user, data.token);
          this.router.navigate(["dashboard"]);
        } else {
          alert(data.msg);
        }
      }
    );
  }

}
