
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AppserviceService} from '../../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  signindetails:any;
  public logindata:any[] | undefined;
  constructor(private router:Router , public fb: FormBuilder , private Myservice:AppserviceService)
  { 
   this.form = new  FormGroup
  ({
    emailid: new FormControl('',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required]),
   });
  }
  
  ngOnInit(){ 
    //  this.signindetails = JSON.parse(localStorage.getItem('form') || '');
  }

   get emailid(): any {
    return this.form.get('emailid');
  }

  get password(): any {
    return this.form.get('password');
  }

   
  onSubmit() 
  {
    console.log(this.signindetails)
    if (this.form.invalid) 
    {
      for (const control of Object.keys(this.form.controls)) 
      {
        this.form.controls[control].markAsTouched();
      }
      return;
    }
    let logindata = []
    logindata.push(this.form.value);
    console.log("login",logindata);
    this.Myservice.Checklogin(logindata);
   

    //let result= this.signindetails.filter( (l: { emailid: any; password: any; }) => l.emailid== this.form.value.emailid  && l.password== this.form.value.password);

  }
}

