import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.scss']
})
export class MenuScreenComponent {
  
  constructor( private router: Router){

  }

  navigateToLogin(){
    this.router.navigate(["Login"])
  }
  navigateToGraph(){
    this.router.navigate(["Graph"])
  }

  navigateToList() {
    this.router.navigate(["ng-list"])
  }

  navigateToRxJS() {
    this.router.navigate(["RxJS"])
  }

  navigateToSquares() {
    this.router.navigate(["square"])
  }
}

