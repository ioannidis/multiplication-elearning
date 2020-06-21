import {AfterContentChecked, AfterViewChecked, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {CurrentUserService} from "../../../core/services/current-user-service/current-user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {

  // public items: MenuItem[];

  public currentUser: any;

  public form: FormGroup;

  constructor(private currentUserService: CurrentUserService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.form = this.formBuilder.group({
      term: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.currentUser = this.currentUserService.getCurrentUser();
  }

  ngAfterContentChecked(): void {
    this.currentUser = this.currentUserService.getCurrentUser();
  }


  onSubmit(): void {
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['search', this.form.get('term').value]);
  }

}
