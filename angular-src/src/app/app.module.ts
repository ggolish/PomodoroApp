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

import { TaskService } from './services/task.service';
import { TimerComponent } from './components/timer/timer.component';

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "about", component: AboutComponent},
    {path: "new-task", component: NewTaskComponent},
    {path: "new-pomodoro", component: NewPomodoroComponent}
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
    TimerComponent
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
