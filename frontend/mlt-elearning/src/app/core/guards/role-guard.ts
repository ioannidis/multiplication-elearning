import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authToken = localStorage.getItem('token');
    const roles = route.data.roles as Array<string>;

    if (authToken) {
      try {
        return this.authService.validate(authToken)
          .pipe(
            map(res => {
              if (res.hasOwnProperty('user')) {
                return res.authorities.some(x => roles.includes(x));
              }
            }
          ));
      } catch (error) {
        console.log('Not valid user details');
        return false;
      }
    }
  }
}
