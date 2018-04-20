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

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "about", component: AboutComponent},
    {path: "new-task", component: NewTaskComponent},
    {path: "new-pomodoro", component: NewPomodoroComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent}
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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
