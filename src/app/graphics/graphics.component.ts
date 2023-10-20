import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiService, Data } from './graphic.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  dataAPI: Data;
  lineChart: Chart;
  loading = false;
  
  constructor(private apiService: ApiService ){}
  
  ngOnInit() {
    //ficar un loading mentres esta rebent la informacio
    this.loading = true;

    this.apiService.getChartData().then(
      (next: any) => {
        this.loading = false;
        this.dataAPI = next;
        this.setChart();
        console.log(this.dataAPI)
      },
      (error: any) => {
        this.loading = false;

      },
    );

  }
  
  private setChart() {
    this.lineChart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Patients'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Patients admitted',
          data: this.dataAPI.body
        } as any
      ]
  
    });
  }
}
