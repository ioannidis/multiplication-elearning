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

  getLessonEvaluation() {
    if (this.score < 75) {
      return 'Fail [F]';
    } else if (this.score >= 75 && this.score <= 95) {
      return 'Pass [B]';
    } else if (this.score > 95) {
      return 'Excellent [A]';
    }
  }

  backToDashBoard() {
    this.route.navigate([''])
  }

}
