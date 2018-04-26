import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  show: boolean = false;

  constructor(public authService: AuthService, private router: Router) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.show = false;
      }
    });
  }

  toggleCollapse() {
    this.show = !this.show;
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(["/"]);
  }

  ngOnInit() {
  }

}
