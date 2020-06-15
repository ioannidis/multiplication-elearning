import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './exercise-three/exercise-three.component';
import { ExerciseFourComponent } from './exercise-four/exercise-four.component';
import { MiniReviewComponent } from './mini-review/mini-review.component';
import { FinalReviewComponent } from './final-review/final-review.component';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule, StepsModule} from "primeng";
import {SelectButtonModule} from 'primeng/selectbutton';
import {ReactiveFormsModule} from "@angular/forms";
import { ResultComponent } from './result/result.component';




@NgModule({
  declarations: [
    ExerciseOneComponent,
    ExerciseTwoComponent,
    ExerciseThreeComponent,
    ExerciseFourComponent,
    MiniReviewComponent,
    FinalReviewComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
    StepsModule,
    SelectButtonModule,
    ButtonModule
  ],
  exports: [
    MiniReviewComponent,
    FinalReviewComponent
  ],
})
export class ReviewModule { }
