import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Inject, Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  private BASE_URL = `${environment.protocol}${window.location.hostname}:${environment.urls.gateway.port}`;
  private AUTH_URLS = `${this.BASE_URL}${environment.urls.auth.path}`;

  constructor(private authService: AuthService) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.includes(this.AUTH_URLS)) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });
    }

    return next.handle(req);

  }

}

