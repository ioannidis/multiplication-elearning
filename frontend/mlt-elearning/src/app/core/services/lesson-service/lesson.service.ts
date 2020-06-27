import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private BASE_URL = `${environment.protocol}${window.location.hostname}:${environment.urls.gateway.port}/lessons`;

  constructor(private http: HttpClient) { }

  find(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  findOne(lessonId): Observable<any> {
    return this.http.get(`${this.BASE_URL}/${lessonId}`)
  }

  update(lesson: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/${lesson.url}`, lesson);
  }
}
