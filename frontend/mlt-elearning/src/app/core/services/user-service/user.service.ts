import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = `${environment.protocol}${window.location.hostname}:${environment.urls.gateway.port}/users`;

  constructor(private http: HttpClient) { }

  find(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  findStudents(): Observable<any> {
    const params = {
      role: 'student'
    }
    return this.http.get(this.BASE_URL,{params});
  }

  update(user: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/${user.username}`, user);
  }

  delete(username: any): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${username}`);
  }

}
