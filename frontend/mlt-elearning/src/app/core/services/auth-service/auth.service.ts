import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = `${environment.protocol}${window.location.hostname}:${environment.urls.gateway.port}`;
  private LOGIN_URL = `${this.BASE_URL}${environment.urls.auth.path}${environment.urls.auth.endpoints.login}`;
  private LOGOUT_URL = `${this.BASE_URL}${environment.urls.auth.path}${environment.urls.auth.endpoints.logout}`;
  private VALIDATE_USER_URL = `${this.BASE_URL}${environment.urls.validate.path}${environment.urls.validate.endpoints}`;
  private PASSWORD_RESET_URL = `${this.BASE_URL}${environment.urls.auth.path}${environment.urls.auth.endpoints.passwordrest}`;
  private SIGNUP_URL = `${this.BASE_URL}${environment.urls.auth.path}${environment.urls.auth.endpoints.signup}`;

  constructor(private http: HttpClient) { }

  public authenticate(username: string, password: string): Observable<any> {

    const payload = {
      username,
      password
    };

    return this.http.post(this.LOGIN_URL, payload);
  }

  public validate(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };

    return this.http.get(this.VALIDATE_USER_URL, httpOptions);
  }

  public passwordReset(payload: any): Observable<any> {
    return this.http.post(`${this.PASSWORD_RESET_URL}`, payload);
  }

  public passwordUpdate(payload: any, token: string): Observable<any> {
    return this.http.post(`${this.PASSWORD_RESET_URL}/${token}`, payload);
  }

  public logout(): Observable<any> {
    localStorage.removeItem('token');
    localStorage.removeItem('current_user');

    return of(null);
  }

  public signUp(payload: any): Observable<any> {
    return this.http.post(this.SIGNUP_URL, payload);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
}
