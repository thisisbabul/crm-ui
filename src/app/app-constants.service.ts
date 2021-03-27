import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {
  public BASE_URL = 'http://localhost:8080/';
  public REGISTRATION_URL = this.BASE_URL + 'registration';
  public LOGIN_URL = this.BASE_URL + 'login';

  constructor() { }
}
