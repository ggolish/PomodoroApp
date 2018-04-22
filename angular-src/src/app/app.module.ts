import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { NewPomodoroComponent } from './components/new-pomodoro/new-pomodoro.component';
import { AboutComponent } from './components/about/about.component';
import { TimerComponent } from './components/timer/timer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { TaskService } from './services/task.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';
import { ChartComponent } from './components/chart/chart.component';

const appRoutes: Routes = [
    {path: "", component: HomeComponent, canActivate: [LoginGuardService]},
    {path: "dashboard", component: DashboardComponent, canActivate: [AuthGuardService]},
    {path: "about", component: AboutComponent},
    {path: "new-task", component: NewTaskComponent, canActivate: [AuthGuardService]},
    {path: "new-pomodoro", component: NewPomodoroComponent, canActivate: [AuthGuardService]},
    {path: "login", component: LoginComponent, canActivate: [LoginGuardService]},
    {path: "register", component: RegisterComponent, canActivate: [LoginGuardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    NewTaskComponent,
    NewPomodoroComponent,
    AboutComponent,
    TimerComponent,
    LoginComponent,
    RegisterComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TaskService,
    AuthService,
    AuthGuardService,
    LoginGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
