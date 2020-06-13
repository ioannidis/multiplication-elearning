import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardIndexComponent} from './dashboard-index/dashboard-index.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', component: DashboardIndexComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
