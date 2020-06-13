import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AuthRoutingModule} from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthComponent } from './auth/auth.component';
import { ButtonModule, InputTextModule, MessageModule, PasswordModule } from 'primeng';
import { PasswordUpdateComponent } from './password-update/password-update.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PasswordResetComponent,
    LogoutComponent,
    AuthComponent,
    PasswordUpdateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessageModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    PasswordResetComponent
  ]
})
export class AuthModule { }
