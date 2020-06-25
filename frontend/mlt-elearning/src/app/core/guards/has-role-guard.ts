import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {CurrentUserService} from "../services/current-user-service/current-user.service";

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(private currentUserService: CurrentUserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let role = route.data.role;

    return this.currentUserService.getRoles() === role;


  }
}
