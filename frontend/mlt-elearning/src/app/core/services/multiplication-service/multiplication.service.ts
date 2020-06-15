import { Injectable } from '@angular/core';
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MultiplicationService {

  private multiplication: any[] = [];

  constructor() {
    for (let k = 0; k <= 10; k++) {
      const temp = [];
      for (let i = 0; i <= 10; i++) {
        const row = [];
        for (let j = 0; j < 3; j++) {

          if (j === 0) {
            row.push(i)
          } else if (j === 1) {
            row.push(k)
          } else {
            row.push(k*i)
          }

        }

      temp.push(row)
      }
      this.multiplication.push(temp);
    }
  }

  getMultiplication(num: number): Observable<any> {
    return from([this.multiplication[num]]);
  }
}
