import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SocketService {
  
  private socket: Socket;

  constructor() {
    this.connect();
   }

   private connect(): void {
    this.socket = io('http://localhost:3000');
  }

  sendMessage(message: any): void {
    this.socket.emit('message', message);
  }

  getNumbers(): Observable<number> {
    return new Observable<number>(observer => {
      this.socket.on('number', (number: number) => {
        observer.next(number);
        console.log(number);
      });
    });
  }
  
  getMessages(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }
}
