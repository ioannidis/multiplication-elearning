import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  formType = 1;

  constructor() { }

  ngOnInit(): void {
  }

  switchForm($event) {
    this.formType = $event.formType;
  }

}
