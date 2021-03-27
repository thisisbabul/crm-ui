import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {Auth} from '../Auth';
import {MessageService} from 'primeng-lts/api';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  auth: Auth = new Auth('', '');
  message: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

  public login(): void {
    const response = this.userService.login(this.auth);
    response.subscribe((data) =>
      this.loginMechanism(JSON.parse(data))
    );
  }

  private loginMechanism(data: any): void {
    if (data.status === 'success') {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Login Successful'});
      this.cookieService.set('subdomain', data.subdomain);
      this.cookieService.set('token', data.token);
      setTimeout(() => {
        window.location.replace('http://' + this.cookieService.get('subdomain') + '.localhost:4201/' + this.cookieService.get('token'));
      }, 1000 );
    }
    else {
      this.messageService.add({severity: 'error', summary: 'Login Failed', detail: 'Incorrect subdomain/password, try again!'});
    }
  }
}
