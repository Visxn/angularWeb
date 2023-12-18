import { Component } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { Socket } from 'socket.io';
import { Chart } from 'chart.js';

import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-graphic-numbers',
  standalone: false,
  templateUrl: './graphic-numbers.component.html',
  styleUrl: './graphic-numbers.component.scss'
})

export class GraphicNumbersComponent {

  private socket: Socket;


  constructor( private socketService: SocketService ) {
  }

  ngOnInit(){
  
  }


  
}
