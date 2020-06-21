import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private details: any;

  constructor() {
    this.syncDetails();
  }

  public getId(): string {
    this.syncDetails();
    return this.details.id;
  }

  public getUsername(): string {
    this.syncDetails();
    return this.details.username;
  }

  public getEmail(): string {
    this.syncDetails();
    return this.details.email;
  }

  public getRoles(): string[] {
    this.syncDetails();
    return this.details.role;
  }

  public getCurrentUser(): any {
    this.syncDetails();
    return this.details;
  }

  public hasCurrentUserPrivileges(role: string[]): boolean {
    this.syncDetails();
    return this.details.role === role[0];
    // return this.details.role.some(x => role.includes(x));
  }

  private syncDetails() {
    this.details = JSON.parse(localStorage.getItem('current_user'));
  }

}
