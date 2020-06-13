import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MenubarModule} from 'primeng/menubar';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MenubarModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ]
})
export class LayoutModule { }
