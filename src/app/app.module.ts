import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { StudentDashbordComponent } from './student-dashbord/student-dashbord.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent } from './dashbord/dashbord.component';
import { TeaDashbordComponent } from './tea-dashbord/tea-dashbord.component';
import { SuthGuard } from './Guard/suth.guard';
import { AuthService } from './Sms/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    StudentDashbordComponent,
    DashbordComponent,
    TeaDashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [SuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
