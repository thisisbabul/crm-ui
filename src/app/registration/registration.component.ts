import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {CookieService} from 'ngx-cookie-service';
import {AppConstantsService} from '../app-constants.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  value: Date;
  user: User = new User('', '', '', '', '', '', '');
  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService,
    private cookieService: CookieService,
    private appConstants: AppConstantsService
  ) { }

  ngOnInit(): void {
  }

  registration(): void {
    const response = this.userService.registration(this.user);
    response.subscribe((data) =>
      this.showMessage(data)
    );
  }

  private showMessage(data: any): void {
    if (data === 'success') {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Registration Successful'});
      setTimeout(() => {
        this.router.navigate(['/']).then();
      }, 1000 );
    }
    else {
      this.messageService.add({severity: 'error', summary: 'Registration Failed', detail: 'Registration Failed, try again!'});
    }
  }
}
