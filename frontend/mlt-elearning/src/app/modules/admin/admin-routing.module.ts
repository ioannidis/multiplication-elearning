import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersAllComponent} from "../user/users-all/users-all.component";
import {LessonsAdminComponent} from "./lessons-admin/lessons-admin.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: 'students', component: UsersAllComponent},
      {path: 'lessons', component: LessonsAdminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
