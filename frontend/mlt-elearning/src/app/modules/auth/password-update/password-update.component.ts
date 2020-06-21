import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent implements OnInit {

  public form: FormGroup;

  private passwordResetId: string;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(x => {
        this.passwordResetId = x.get('id')
      });
  }

  onSubmit() {
    console.log(this.form);
    this.authService.passwordUpdate(this.form.value, this.passwordResetId)
      .subscribe(x => {
        this.router.navigate(['/auth', 'login']);
      });
  }

}
