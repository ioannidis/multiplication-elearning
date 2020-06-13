import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private subject$ = new Subject();

  constructor() { }

  emit(payload: any) {
    this.subject$.next(payload);
  }

  on(): Observable<any> {
    return this.subject$.asObservable();
  }

}
