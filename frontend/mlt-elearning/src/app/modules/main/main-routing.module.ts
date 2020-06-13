import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
