import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ]
})
export class LoginComponent {

  formUser = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('' , [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
    'direccion': new FormControl('', Validators.required),
    'profesion': new FormControl('', Validators.required),
    'moreFields': new FormControl(false, Validators.required)

    });

    processData(){
      console.log(this.formUser.value);
    }
    
    hasMoreFields(){
      return this.formUser.get('moreFields')?.value
    }

 
 }
