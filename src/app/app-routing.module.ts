import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Components/adminLayout/admin-layout.component';
import { AdminComponent } from './Components/adminLayout/admin/admin.component';
import { DashboardComponent } from './Components/adminLayout/dashboard/dashboard.component';
import { LicencesComponent } from './Components/adminLayout/licences/licences.component';
import { UtilisateursComponent } from './Components/adminLayout/utilisateurs/utilisateurs.component';
import { LoginComponent } from './Components/loginLayout/login/login.component';
import { SignUpComponent } from './Components/loginLayout/sign-up/sign-up.component';

const routes: Routes = [

  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent},
  {
    path: 'admin-layout', component: AdminLayoutComponent, children: [{
      path: '', component: DashboardComponent
    }, {
      path: 'utilisateurs', component: UtilisateursComponent
    }, {
      path: 'licences', component: LicencesComponent
    }, {
      path: 'admin', component: AdminComponent
    }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
