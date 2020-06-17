import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {CurrentUserService} from "../current-user-service/current-user.service";

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  private BASE_URL = `${environment.protocol}${window.location.hostname}:${environment.urls.gateway.port}`;

  constructor(private http: HttpClient,
              private currentUserService: CurrentUserService) { }

  find(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/${this.currentUserService.getUsername()}/achievements`);
  }

  save(achievement): Observable<any> {
    return this.http.post(`${this.BASE_URL}/users/${this.currentUserService.getUsername()}/achievements`, achievement);
  }
}
