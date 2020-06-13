import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GlobalErrorComponent} from './global-error/global-error.component';
import { GlobalErrorWrapperComponent } from './global-error-wrapper/global-error-wrapper.component';

const routes: Routes = [
  {path: '', component: GlobalErrorWrapperComponent, children:
      [
        {path: '', component: GlobalErrorComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {}
