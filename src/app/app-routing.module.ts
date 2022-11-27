import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataComponent } from './data/data.component';
import { LogoutComponent } from './component/logout/logout.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [ 
  {path:'',component: LoginComponent},
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path:'Calculator', component: CalculatorComponent},
  {path:'navbar',component: NavbarComponent},
  {path:'data',component: DataComponent},
  {path:'logout',component: LogoutComponent},
  {path:'form',component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
