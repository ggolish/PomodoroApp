import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from "../../interfaces/task.interface";
import { Chart } from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart: Chart;
  tasks: Task[];
  months: string[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  lineChartData: Array<any>;
  lineChartLabels: Array<any>;
  lineChartType: string = "line";
  lineChartOptions: any = {
    responsive: true
  };

  @ViewChild("myCanvas") canvasRef: ElementRef;
  constructor(private taskService: TaskService) {
  }

  ngAfterViewInit() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
      this.update();
    });
  }

  update() {
    this.lineChartLabels = [];
    this.lineChartData = [];
    let today = new Date();
    for(let t of this.tasks) {
      for(let p of t.pomodoros) {
        let d = new Date(p.date);
        let millis = today.valueOf() - d.valueOf();
        let days = millis / (1000 * 60 * 60 * 24);
        if(days <= 30) {
          let dstring = this.months[d.getMonth()] + " " + d.getDate();
          if(this.lineChartLabels.indexOf(dstring) == -1) {
            this.lineChartLabels.push(dstring);
            this.lineChartData.push(p.amount);
          } else {
            this.lineChartData[this.lineChartLabels.indexOf(dstring)] += p.amount;
          }
        }
      }
    }
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
              display: true,
              labelString: "Day"
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Pomodoros"
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  ngOnInit() {
  }

}
