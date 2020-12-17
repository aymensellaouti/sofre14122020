import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'https://immense-citadel-91115.herokuapp.com/api/Users/login/';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
