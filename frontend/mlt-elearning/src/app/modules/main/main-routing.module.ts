import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {NgModule} from "@angular/core";
import {LogoutComponent} from "../auth/logout/logout.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
