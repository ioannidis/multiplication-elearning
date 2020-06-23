import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './exercise-three/exercise-three.component';
import { ExerciseFourComponent } from './exercise-four/exercise-four.component';
import { MiniReviewComponent } from './mini-review/mini-review.component';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule, StepsModule, TableModule} from "primeng";
import {SelectButtonModule} from 'primeng/selectbutton';
import {ReactiveFormsModule} from "@angular/forms";
import { ResultComponent } from './result/result.component';
import { ReviewComponent } from './review/review.component';
import {LayoutModule} from "../../shared/layout/layout.module";
import { ReviewShowComponent } from './review-show/review-show.component';
import {ReviewRoutingModule} from "./review-routing.module";
import { FinalReviewComponent } from './final-review/final-review.component';




@NgModule({
  declarations: [
    ExerciseOneComponent,
    ExerciseTwoComponent,
    ExerciseThreeComponent,
    ExerciseFourComponent,
    MiniReviewComponent,
    ResultComponent,
    ReviewComponent,
    ReviewShowComponent,
    FinalReviewComponent
  ],
    imports: [
        CommonModule,
        ReviewRoutingModule,
        ReactiveFormsModule,
        LayoutModule,
        TabViewModule,
        StepsModule,
        SelectButtonModule,
        ButtonModule,
        TableModule
    ],
  exports: [
    MiniReviewComponent
  ],
})
export class ReviewModule { }
