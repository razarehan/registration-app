import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { ViewListComponent } from "./components/view-list/view-list.component";
import { AuthGardService} from './/services/auth/auth-gard.service';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  { path: 'viewlist', 
  component: ViewListComponent},
  { path: 'dashboard', 
  component: DashboardComponent},
  { path: 'login', component: LoginComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}