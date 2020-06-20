import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AuthService } from '../../../core/services/auth-service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  @Output() formType: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;
  public isSubmitted: boolean = false;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@gmail\.[a-z]{2,4}$')]]
    });
  }

  ngOnInit() {
  }

  switchForm(formType) {
    this.formType.emit({formType})
  }

  onPasswordReset() {

    if (this.form.invalid) {
      return;
    }

    this.isSubmitted = true;
    this.authService.passwordReset(this.form.value)
      .subscribe(x => {
        this.router.navigate(['/auth', 'login']);
      },
      error => {
        this.isSubmitted = false;
        console.log('Error code :' +  error.status + ' - ' + error.error.message + ' / ' + error.message);
      });
  }

}
