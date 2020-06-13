import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LessonsComponent} from "./lessons/lessons.component";
import {LessonsShowComponent} from "./lessons-show/lessons-show.component";

const routes: Routes = [
  {
    path: '', component: LessonsComponent, children: [
      {path: ':url', component: LessonsShowComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
