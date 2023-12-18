import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { SocketService } from '../services/socket.service';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, registerables } from 'chart.js';


@Component({
  selector: 'app-random-number-chart',
  standalone: false,
  templateUrl: './random-number-chart.component.html',
  styleUrl: './random-number-chart.component.scss'
})

@Injectable({
  providedIn: 'root'
})

export class RandomNumberChartComponent {


  chart: Chart;
  randNumbs: number[] = [];
  constructor(private socketService: SocketService) {

    Chart.register(...registerables);
  }

  ngOnInit() {
    this.createChart();
   
    this.socketService.getNumbers().subscribe((number) => {
      if (this.randNumbs.length >= 10) {
        this.randNumbs.shift();
      }
      this.randNumbs.push(number);
      this.chart.update();
    });
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [
          {
            label: 'Last 10 numbers',
            data: this.randNumbs,
            backgroundColor: 'limegreen',
            pointBackgroundColor: 'rgba(50, 205, 50, 0.5)', // Ajusta la transparencia aquí
            pointRadius: 7,
            pointHoverRadius: 14 // Ajust



          }
        ]
      },
      options: {
        aspectRatio: 4,
        responsive: true,


      }
    });
  }
}
 

