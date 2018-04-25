import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from "../../interfaces/task.interface";
import { Chart } from "chart.js";
import { FormatService } from "../../services/format.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart: Chart;
  tasks: Task[];

  lineChartData: Array<any>;
  lineChartLabels: Array<any>;
  lineChartType: string = "line";
  lineChartOptions: any = {
    responsive: true
  };

  @ViewChild("myCanvas") canvasRef: ElementRef;
  constructor(
    private taskService: TaskService,
    private format: FormatService
  ) { }

  ngAfterViewInit() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
      this.update();
    });
  }

  update() {
    this.lineChartLabels = this.lastDays(30);
    this.lineChartData = [];
    for(let i: number = 0; i < 30; ++i) {
      this.lineChartData.push(0);
    }
    let today = new Date();
    for(let t of this.tasks) {
      for(let p of t.pomodoros) {
        // let d = new Date(p.date);
        // let dstring = this.months[d.getMonth()] + " " + d.getDate();
        let dstring = this.format.getDateString(p.date);
        if(this.lineChartLabels.indexOf(dstring) > -1) {
          this.lineChartData[this.lineChartLabels.indexOf(dstring)] += p.amount;
        }
      }
    }
    let maxValue = Math.max(...this.lineChartData);
    let ctx = this.canvasRef.nativeElement.getContext("2d");
    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: this.lineChartLabels,
        datasets: [{
          borderColor: "#4582EC",
          label: "Series 1",
          data: this.lineChartData
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Activity Last 30 Days"
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: false
            },
            ticks: {
              display: false
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true,
              max: maxValue + 0.5
            }
          }]
        }
      }
    });
  }

  lastDays(n: number) {
    let milliDay: number = 24 * 60 * 60 * 1000;
    let milliCurr: number = Date.now();
    let days: string[] = [];
    for(let i: number = 0; i < n; ++i) {
      // let dayCurr: Date = new Date(milliCurr);
      // days.push(this.months[dayCurr.getMonth()] + " " + dayCurr.getDate());
      days.push(this.format.getDateString(new Date(milliCurr)));
      milliCurr -= milliDay;
    }
    return days.reverse();
  }

  ngOnInit() {
  }

}
