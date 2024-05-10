import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ChartComponent,
  ApexOptions,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  options: ApexOptions;
};


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {

  public chartOptions: Partial<ChartOptions>;

  constructor(public authService: AuthService, public router: Router) {
    this.chartOptions = {
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 2]
        }
      ],
      chart: {
        height: 350,
        type: "radar"
      },
      title: {
        text: "Psychograph"
      },
      xaxis: {
        categories: ["Anger", "Disgust", "Enjoyment", "Fear", "Sadness", "Surprise"]
      },
      options: { }
      }
    };

  get userName() {
    return JSON.parse(localStorage.getItem('user')!).displayName
  }

  get userEmail() {
    return JSON.parse(localStorage.getItem('user')!).email
  }
}


const config = {
  type: 'line',
  data: {},
  options: {},
  plugins: []
}
