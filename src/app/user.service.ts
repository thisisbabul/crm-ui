import {Injectable} from '@angular/core';
import {Auth} from './Auth';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './User';
import {AppConstantsService} from './app-constants.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private appConstants: AppConstantsService
  ) { }

  public login(auth: Auth): Observable<any> {
    return this.http.post(this.appConstants.LOGIN_URL, auth, {responseType: 'text' as 'json'});
  }

  registration(user: User): any {
    return this.http.post(this.appConstants.REGISTRATION_URL, user, {responseType: 'text' as 'json'});
  }
}
