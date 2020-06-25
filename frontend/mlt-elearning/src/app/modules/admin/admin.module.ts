import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {LayoutModule} from "../../shared/layout/layout.module";
import {LessonsAdminComponent} from "./lessons-admin/lessons-admin.component";
import {ButtonModule, DialogModule, EditorModule, InputTextareaModule, InputTextModule, TableModule} from "primeng";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AdminComponent,
    LessonsAdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    LayoutModule,
    DialogModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    EditorModule,
    FormsModule
  ]
})
export class AdminModule { }
