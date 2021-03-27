import {Component, OnInit} from '@angular/core';
import {AuthTS} from '../model/AuthTS';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-stlogin',
  templateUrl: './stlogin.component.html',
  styleUrls: ['./stlogin.component.css']
})
export class StloginComponent implements OnInit {

  auth: AuthTS = new AuthTS('', '', '');
  countries: any[];
  selectedCountry: string;
  constructor(
    private messageService: MessageService
  ) {
    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
    ];
  }

  ngOnInit(): void {
  }

  public login(): void {
    /*const response = this.userService.login(this.auth);
    response.subscribe((data) =>
      this.loginMechanism(JSON.parse(data))
    );*/
    this.messageService.add({severity: 'error', summary: 'Login Failed', detail: 'Incorrect subdomain/password, try again!'});
  }

  /*private loginMechanism(data: any): void {
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
  }*/
}
