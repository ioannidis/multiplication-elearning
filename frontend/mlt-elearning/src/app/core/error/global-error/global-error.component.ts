import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent implements OnInit {

  public status: string;
  public message: string;
  public description: string;
  public redirectionLink: string[];
  public redirectionLabel: string;

  constructor(private router: Router) { }

  ngOnInit() {
    if (!history.state.error) {
      this.router.navigate(['']);
      return;
    }
    const state = history.state;
    this.status = state.error.status;
    this.message = state.error.statusText;
    this.description = state.description;
    this.redirectionLink = state.redirectionLink || [''];
    this.redirectionLabel = state.redirectionLabel;
  }

}
