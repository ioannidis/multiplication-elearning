import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mini-review',
  templateUrl: './mini-review.component.html',
  styleUrls: ['./mini-review.component.scss']
})
export class MiniReviewComponent implements OnInit {

  @Input() numberOfExercises: number;

  constructor() { }

  ngOnInit(): void {
  }

}
