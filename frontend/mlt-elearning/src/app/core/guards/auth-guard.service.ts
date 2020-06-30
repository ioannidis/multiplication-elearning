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
        // @ts-ignore
        return this.authService.validate(authToken).toPromise()
          .then(x => true)
          .catch(x => {
            console.log(x);
            this.redirectToLogin();
          });
      } catch (error) {
        return this.redirectToLogin();
      }
    }

    return this.redirectToLogin();
  }

    redirectToLogin(): boolean {
      localStorage.removeItem('token');
      localStorage.removeItem('current_user');
      this.router.navigate(['auth']);
      return false;
    }

}
