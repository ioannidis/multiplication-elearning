import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonsShowComponent } from './lessons-show/lessons-show.component';
import {LessonsRoutingModule} from "./lessons-routing.module";



@NgModule({
  declarations: [
    LessonsComponent,
    LessonsShowComponent
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule
  ]
})
export class LessonsModule { }
