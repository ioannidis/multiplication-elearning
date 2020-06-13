import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {MainRoutingModule} from "./main-routing.module";
import {LayoutModule} from "../../shared/layout/layout.module";
import {AuthModule} from "../auth/auth.module";



@NgModule({
  declarations: [
    MainComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    AuthModule
  ]
})
export class MainModule { }
