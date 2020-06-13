import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';
import { Router } from '@angular/router';
import { SearchService } from '../../../core/services/search-service/search.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // public items: MenuItem[];

  public currentUser: any;

  public form: FormGroup;

  constructor(private searchService: SearchService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.form = this.formBuilder.group({
      term: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('current_user'));
  }

  onSubmit(): void {
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['search', this.form.get('term').value]);
  }

}
