import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {CalendarModule} from 'primeng-lts/calendar';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import {InputTextModule} from 'primeng-lts/inputtext';
import {PasswordModule} from 'primeng-lts/password';
import {ButtonModule} from 'primeng-lts/button';
import {UserService} from './user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng-lts/toast';
import {CookieService} from 'ngx-cookie-service';
import {MessageService} from 'primeng/api';
import {RequestInterceptor} from './request.interceptor';
import { StloginComponent } from './stlogin/stlogin.component';
import {DropdownModule} from 'primeng-lts/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    StloginComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    DropdownModule
  ],
  providers: [
    UserService,
    CookieService,
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
