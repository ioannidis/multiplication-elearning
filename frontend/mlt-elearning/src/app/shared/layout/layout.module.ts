import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MenubarModule} from 'primeng/menubar';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { HelpStudentComponent } from './help-student/help-student.component';
import { HelpTeacherComponent } from './help-teacher/help-teacher.component';
import {ButtonModule, DialogModule, TabViewModule} from "primeng";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    HelpStudentComponent,
    HelpTeacherComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
    TabViewModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ]
})
export class LayoutModule { }
