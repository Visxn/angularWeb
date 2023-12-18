import { Component } from '@angular/core';
import { MsgSenderComponent } from '../msg-sender/msg-sender.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aws',
  standalone: true,
  imports: [],
  templateUrl: './aws.component.html',
  styleUrl: './aws.component.scss'
})
export class AwsComponent {

  constructor(private router: Router) { } 


  navigateToSender(){
    this.router.navigate(["sender"])
  }

  navigateToGraphic(){
    this.router.navigate(["graphic-numbers"])
  }

}
