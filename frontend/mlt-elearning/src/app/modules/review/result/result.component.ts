import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() results: any[];
  @Input() score: Number;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  backToDashBoard() {
    this.route.navigate([''])
  }

}
