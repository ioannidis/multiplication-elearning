import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LessonsComponent} from "./lessons/lessons.component";
import {LessonsShowComponent} from "./lessons-show/lessons-show.component";
import {LessonsAdminComponent} from "../admin/lessons-admin/lessons-admin.component";

const routes: Routes = [
  {
    path: '', component: LessonsComponent, children: [
      {path: ':url', component: LessonsShowComponent},
      {path: 'lessons', component: LessonsAdminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
