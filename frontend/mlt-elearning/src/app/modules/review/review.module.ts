import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './exercise-three/exercise-three.component';
import { ExerciseFourComponent } from './exercise-four/exercise-four.component';
import { MiniReviewComponent } from './mini-review/mini-review.component';
import { FinalReviewComponent } from './final-review/final-review.component';



@NgModule({
  declarations: [
    ExerciseOneComponent,
    ExerciseTwoComponent,
    ExerciseThreeComponent,
    ExerciseFourComponent,
    MiniReviewComponent,
    FinalReviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiniReviewComponent,
    FinalReviewComponent
  ],
})
export class ReviewModule { }
