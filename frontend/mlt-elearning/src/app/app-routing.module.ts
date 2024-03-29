import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from "./core/error/not-found/not-found.component";
import {AuthGuard} from "./core/guards/auth-guard.service";
import {HasRoleGuard} from "./core/guards/has-role-guard";


const routes: Routes = [
  {path: '', canActivate: [AuthGuard], pathMatch: 'full', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'lessons', canActivate: [AuthGuard, HasRoleGuard], data: {role: 'student'}, loadChildren: () => import('./modules/lessons/lessons.module').then(m => m.LessonsModule)},
  {path: 'reviews', canActivate: [AuthGuard, HasRoleGuard], data: {role: 'student'}, loadChildren: () => import('./modules/review/review.module').then(m => m.ReviewModule)},
  {path: 'admin', canActivate: [AuthGuard, HasRoleGuard], data: {role: 'teacher'}, loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'error', loadChildren: () => import('./core/error/error.module').then(m => m.ErrorModule)},
  {path: '404', component: NotFoundComponent, data: { error: 404, message: 'Oops Page Not Found', description: 'The page you are looking for does not exist or has been moved.'}},
  {path: '**', redirectTo: '/404'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
