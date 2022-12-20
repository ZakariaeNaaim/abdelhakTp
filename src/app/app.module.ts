import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/loginLayout/login/login.component';
import { SignUpComponent } from './Components/loginLayout/sign-up/sign-up.component';
import { AdminLayoutComponent } from './Components/adminLayout/admin-layout.component';
import { DashboardComponent } from './Components/adminLayout/dashboard/dashboard.component';
import { UtilisateursComponent } from './Components/adminLayout/utilisateurs/utilisateurs.component';
import { LicencesComponent } from './Components/adminLayout/licences/licences.component';
import { BatchComponent } from './Components/adminLayout/batch/batch.component';
import { NavbarComponent } from './Components/adminLayout/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { AdminComponent } from './Components/adminLayout/admin/admin.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AdminLayoutComponent,
    DashboardComponent,
    UtilisateursComponent,
    LicencesComponent,
    BatchComponent,
    NavbarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
