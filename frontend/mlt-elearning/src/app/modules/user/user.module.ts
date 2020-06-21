import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersAllComponent } from './users-all/users-all.component';
import {ButtonModule, DialogModule, InputTextModule, TableModule} from "primeng";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UsersAllComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ],
  exports: [
    UsersAllComponent
  ]
})
export class UserModule { }
