import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { NgListComponent } from './ng-list/ng-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuScreenComponent } from './menu-screen/menu-screen.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphicsComponent } from './graphics/graphics.component';
import { ChartModule } from 'angular-highcharts';
import { ListRedirectComponent } from './list-redirect/list-redirect.component';
import { RxjsScreenComponent } from './rxjs-screen/rxjs-screen.component';
import { TranslationsComponent } from './translations/translations.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    NgListComponent,
    MenuScreenComponent,
    LoginComponent,
    GraphicsComponent,
    ListRedirectComponent,
    RxjsScreenComponent,
    TranslationsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ],
      }
    })
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
