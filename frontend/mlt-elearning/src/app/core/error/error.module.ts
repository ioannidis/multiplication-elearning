import {NgModule} from '@angular/core';
import {GlobalErrorComponent} from './global-error/global-error.component';
import {ErrorRoutingModule} from './error-routing.module';
import {CommonModule} from '@angular/common';
import { GlobalErrorWrapperComponent } from './global-error-wrapper/global-error-wrapper.component';
import { LayoutModule } from '../../shared/layout/layout.module';

@NgModule({
  declarations: [
    GlobalErrorComponent,
    GlobalErrorWrapperComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    LayoutModule
  ]
})
export class ErrorModule { }
