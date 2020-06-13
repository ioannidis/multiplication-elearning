import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service/auth.service';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() formType: EventEmitter<any> = new EventEmitter<any>();

  public isAuthFailed: boolean = false;
  public errorMessage: string;

  public form: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    if (history.state.error) {
      const state = history.state;

      this.isAuthFailed = true;
      this.errorMessage = `${state.error.error} - ${state.description}`;
    }
  }

  switchForm(formType) {
    this.formType.emit({formType})
  }

  onAuthenticate() {
    this.authService
      .authenticate(this.form.value.username.trim(), this.form.value.password)
      .pipe(
        mergeMap(res => {
          localStorage.setItem('token', res.token);
          return this.authService.validate(res.token);
        })
      )
      .subscribe(
        (res: any) => {
          localStorage.setItem('current_user', JSON.stringify(res.user));
          this.router.navigate(['/']);
        },
        (error) => {
          this.isAuthFailed = true;
          console.log('Error code :' +  error.status + ' - ' + error.error.message + ' / ' + error.message);
        }
      );
  }
}
