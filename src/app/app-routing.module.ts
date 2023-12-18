import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgListComponent } from './ng-list/ng-list.component';
import { SquareComponent } from './square/square.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MenuScreenComponent } from './menu-screen/menu-screen.component';
import { LoginComponent } from './login/login.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ListRedirectComponent } from './list-redirect/list-redirect.component';
import { RxjsScreenComponent } from './rxjs-screen/rxjs-screen.component';
import { TranslationsComponent } from './translations/translations.component';
import { AwsComponent } from './aws/aws.component';
import { MsgSenderComponent } from './msg-sender/msg-sender.component';
import { GraphicNumbersComponent } from './graphic-numbers/graphic-numbers.component';

const routes: Routes = [ 
  { path: 'ng-list', component: NgListComponent },
  { path: 'square', component: SquareComponent },
  { path: 'Menu', component: MenuScreenComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Graph', component: GraphicsComponent },
  { path: 'RxJS', component: RxjsScreenComponent },
  { path: 'sender', component: MsgSenderComponent },
  { path: 'translations', component: TranslationsComponent },
  { path: 'graphic-numbers', component: GraphicNumbersComponent },
  { path: 'aws', component: AwsComponent },
  { path:'redirected-list/:id', component: ListRedirectComponent},
  { path: '', redirectTo: '/menu-screen', pathMatch: 'full' },
  { path: '**', component: MenuScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule, CommonModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
