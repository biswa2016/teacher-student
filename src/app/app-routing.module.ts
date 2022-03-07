import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SuthGuard } from './Guard/suth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthService } from './Sms/auth.service';
import { StudentDashbordComponent } from './student-dashbord/student-dashbord.component';
import { TeaDashbordComponent } from './tea-dashbord/tea-dashbord.component';

const routes: Routes = [
  {path:"",redirectTo:"reg",pathMatch:"full"},
  {path:"test",component:StudentDashbordComponent},
  {path:"reg",component:RegistrationComponent},
  {path:"log",component:LoginComponent},
  {path:"das",component:DashbordComponent},
  {path:"tdas",component:TeaDashbordComponent,canActivate:[SuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
