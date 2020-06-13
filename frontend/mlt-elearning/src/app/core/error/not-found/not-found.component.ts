import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public error: number;
  public message: string;
  public description: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.data.subscribe(data => {
        this.error = data.error;
        this.message = data.message;
        this.description = data.description;
      });
  }

}
