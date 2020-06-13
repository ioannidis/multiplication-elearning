import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const router = this.injector.get(Router);
    console.log(router);
    console.error(error);
    if (error instanceof HttpErrorResponse) {
      router.navigate(['error'], {queryParams: {error: '503', message: 'Connection refused'}});
    }

  }

}
