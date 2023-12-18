import { Component, Injectable, Type } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs/internal/Observable';
import {  SocketService } from 'src/app/services/socket.service'


export type SocketMessage = {
  message: string,
  userName: string
};

@Component({
  selector: 'app-msg-sender',
  standalone: false,
  templateUrl: './msg-sender.component.html',
  styleUrl: './msg-sender.component.scss'
})

@Injectable({
  providedIn: 'root'
})

export class MsgSenderComponent {

  userName: string = localStorage.getItem('userName')!!;
  messages: SocketMessage[] = [];
  messageForm = new FormGroup({
    'message': new FormControl('', Validators.required)
  });

  constructor(private socketService: SocketService) {
    this.getMessage();
  }

  ngOnInit(){
    
  }

  sendMessage() {
    let mensajeEnviado = this.messageForm.get('message')?.value;
    this.socketService.sendMessage({message: mensajeEnviado, userName: this.userName});
    
    const tmpMessage: SocketMessage = {
      message: mensajeEnviado!!,
      userName: localStorage.getItem('userName')!!
    }
    
    this.messages.push(tmpMessage)
    console.log(this.messages)
  }

  getMessage() {
    this.socketService.getMessages().subscribe(( message : any ) => {
      this.messages.push(message);
      console.log(message); 
    });
  }
}
