import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {NavigationExtras, Router} from '@angular/router';

@Injectable()
export class GlobalErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError(error => {
          if (error instanceof HttpErrorResponse) {
            const navigationExtras: NavigationExtras = {
              state: {
                error,
                description: ''
              }
            };

            switch (error.status) {
              case 0: {
                // State can store up to 640k
                // We override navigationExtras.state.error with an empty obj because error obj > 640k
                navigationExtras.state.error = {};
                navigationExtras.state.error.status = 502;
                navigationExtras.state.error.statusText = 'Server unavailable';
                navigationExtras.state.error.error = 'Fatal Error';
                navigationExtras.state.description = 'Restart the server or contact the support team!';
                navigationExtras.state.redirectionLabel = null;
                this.router.navigate(['error'], navigationExtras);
                break;
              }
              case 460: {
                navigationExtras.state.error = {};
                navigationExtras.state.error.status = 401;
                navigationExtras.state.error.statusText = 'Unauthorized';
                navigationExtras.state.error.error = error.error;
                navigationExtras.state.description = error.message;
                navigationExtras.state.redirectionLink = ['/login'];
                navigationExtras.state.redirectionLabel = 'Back to login page';

                // Remove token from locale storage
                localStorage.removeItem('token');
                this.router.navigate(['error'], navigationExtras);
                break;
              }
              case 403: {
                navigationExtras.state.error = {};
                navigationExtras.state.error.status = 403;
                navigationExtras.state.error.statusText = error.statusText;
                navigationExtras.state.error.error = error.error;
                navigationExtras.state.description = 'Your credentials have been expired';

                // Remove token from locale storage
                localStorage.removeItem('token');
                this.router.navigate(['/login'], navigationExtras);
                break;
              }
              case 404: {
                navigationExtras.state.error = {};
                navigationExtras.state.error.status = 404;
                navigationExtras.state.error.statusText = error.statusText;
                navigationExtras.state.error.error = error.error;
                navigationExtras.state.description = error.message;
                navigationExtras.state.redirectionLink = ['..'];
                navigationExtras.state.redirectionLabel = 'Back';
                this.router.navigate(['error'], navigationExtras);
                break;
              }
              case 500: {
                navigationExtras.state.error = {};
                navigationExtras.state.error.status = 500;
                navigationExtras.state.error.statusText = error.statusText;
                navigationExtras.state.error.error = error.error;
                navigationExtras.state.description = error.message;
                navigationExtras.state.redirectionLink = ['..'];
                navigationExtras.state.redirectionLabel = 'Back';
                this.router.navigate(['error'], navigationExtras);
                break;
              }
              case 502: {
                navigationExtras.state.error = {};
                navigationExtras.state.error.status = 502;
                navigationExtras.state.error.statusText = error.statusText;
                navigationExtras.state.error.error = error.error;
                navigationExtras.state.description = 'Restart the server or contact the support team.';
                navigationExtras.state.redirectionLink = null;
                navigationExtras.state.redirectionLabel = null;
                this.router.navigate(['error'], navigationExtras);
                break;
              }
            }
          }
          return throwError(error);
        })
      );
  }
}
