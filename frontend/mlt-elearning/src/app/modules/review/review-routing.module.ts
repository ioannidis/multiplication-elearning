import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReviewComponent} from "./review/review.component";
import {ReviewShowComponent} from "./review-show/review-show.component";
import {FinalReviewComponent} from "./final-review/final-review.component";

const routes: Routes = [
  {
    path: '', component: ReviewComponent, children: [
      {path: 'final-review', component: FinalReviewComponent},
      {path: ':url', component: ReviewShowComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
