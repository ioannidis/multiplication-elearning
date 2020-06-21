import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../../shared/layout/layout.module';
import { ButtonModule, CardModule, TableModule } from 'primeng';
import {UserModule} from "../user/user.module";



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardIndexComponent
  ],
    imports: [
      CommonModule,
      DashboardRoutingModule,
      LayoutModule,
      UserModule,
      TableModule,
      CardModule,
      ButtonModule
    ]
})
export class DashboardModule { }
