import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { DataComponent } from './data/data.component';
import { AppserviceService } from './myservice.service';
import { LogoutComponent } from './component/logout/logout.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CalculatorComponent,
    NavbarComponent,
    SidemenuComponent,
    DataComponent,
    LogoutComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
