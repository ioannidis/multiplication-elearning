import {NgModule} from '@angular/core';
import {GlobalErrorComponent} from './global-error/global-error.component';
import {ErrorRoutingModule} from './error-routing.module';
import {CommonModule} from '@angular/common';
import { GlobalErrorWrapperComponent } from './global-error-wrapper/global-error-wrapper.component';
import { LayoutModule } from '../../shared/layout/layout.module';
import {NotFoundComponent} from "./not-found/not-found.component";

@NgModule({
  declarations: [
    GlobalErrorComponent,
    GlobalErrorWrapperComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    LayoutModule
  ]
})
export class ErrorModule { }
