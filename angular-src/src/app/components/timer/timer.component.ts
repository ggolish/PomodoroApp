import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";
import { FormatService } from "../../services/format.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() countTime: number;
  @Input() status: string;
  timeEllapsed: number;
  pauseOffset: number;

  @Output() notifier: EventEmitter<any> = new EventEmitter<any>();

  isPaused: boolean;
  isStopped: boolean;
  startTime: number;
  intervalId: any;
  minutes: String;
  seconds: String;
  oldSeconds: String;   // Only for the tick sound

  tick: boolean;
  alarmSound: any;
  tickSound: any;

  constructor(private router: Router, private format: FormatService) {
    this.timeEllapsed = 0;
    this.isPaused = true;
    this.isStopped = false;
    this.pauseOffset = 0;
    this.minutes = "00";
    this.seconds = "00";
    this.oldSeconds = "00";
    this.tickSound = new Audio();
    this.tickSound.src = "../../../sounds/tick.mp3";
    this.alarmSound = new Audio();
    this.alarmSound.src = "../../../sounds/bell.mp3";

    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        clearInterval(this.intervalId);
      }
    });
  }

  start() {
    this.startTime = Date.now();
    this.isPaused = false;
    this.intervalId = setInterval(() => {
      this.timeEllapsed = Math.floor((Date.now() - this.startTime) / 1000) + this.pauseOffset;
      this.notify();
      if(this.timeEllapsed <= this.countTime && !this.isPaused) {
        let newTime = this.countTime - this.timeEllapsed;
        this.minutes = this.format.padZero(Math.floor(newTime / 60));
        this.seconds = this.format.padZero(newTime % 60);
        if(this.seconds != this.oldSeconds) {
          this.tickSound.play();
          this.oldSeconds = this.seconds;
        }
      } else {
        if(!this.isPaused) {
          this.timeEllapsed = 0;
          this.pauseOffset = 0;
          this.isPaused = true;
          this.alarmSound.load();
          this.alarmSound.play();
        }
        clearInterval(this.intervalId);
      }
    }, 500);
  };

  pause() {
    this.isPaused = true;
    this.pauseOffset = this.timeEllapsed;
  }

  stop() {
    clearInterval(this.intervalId);
    this.isStopped = true;
    this.notify();
  }

  notify() {
    if(this.isPaused) return;
    this.notifier.next({
      timeEllapsed: this.timeEllapsed,
      isPaused: this.isPaused,
      isStopped: this.isStopped,
      fraction: this.timeEllapsed / this.countTime
    });
  }

  ngOnInit() {
  }

}
