import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authToken = localStorage.getItem('token');

    if (authToken) {
      try {
        if (this.authService.validate(authToken)) {
          return true;
        }
      } catch (error) {
        return this.redirectToLogin();
      }
    }

    return this.redirectToLogin();
  }

    redirectToLogin(): boolean {
      localStorage.removeItem('token');
      this.router.navigate(['auth']);
      return false;
    }

}
