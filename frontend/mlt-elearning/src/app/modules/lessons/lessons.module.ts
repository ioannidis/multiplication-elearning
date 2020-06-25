import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonsShowComponent } from './lessons-show/lessons-show.component';
import {LessonsRoutingModule} from "./lessons-routing.module";
import {LayoutModule} from "../../shared/layout/layout.module";
import {TabViewModule} from 'primeng/tabview';
import {StepsModule} from 'primeng/steps';
import {ReviewModule} from "../review/review.module";
import {ButtonModule, TableModule} from "primeng";



@NgModule({
  declarations: [
    LessonsComponent,
    LessonsShowComponent,
  ],
    imports: [
        CommonModule,
        LessonsRoutingModule,
        LayoutModule,
        ReviewModule,
        TabViewModule,
        StepsModule,
        ButtonModule,
        TableModule
    ]
})
export class LessonsModule { }
