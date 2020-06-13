import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { LogoutComponent } from './logout/logout.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { LoginGuard } from '../../core/guards/login/login.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
          {
            path: '',
            canActivate: [LoginGuard],
            component: LoginComponent,
          },
          {
            path: 'login',
            canActivate: [LoginGuard],
            component: LoginComponent,
          },
          {
            path: 'signup',
            canActivate: [LoginGuard],
            component: SignupComponent,
          },
          {
            path: 'logout',
            component: LogoutComponent,
          },
          {
            path: 'passwordreset',
            canActivate: [LoginGuard],
            component: PasswordResetComponent,
          },
          {
            path: 'passwordreset/:id',
            canActivate: [LoginGuard],
            component: PasswordUpdateComponent,
          }
        ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
