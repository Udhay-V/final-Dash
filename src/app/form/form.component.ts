import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppserviceService } from '../myservice.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: any;
  id: any;
  profiledata: any;
  // disableTextbox: any;

  constructor(private Myservice: AppserviceService) {
    
    this.form = new FormGroup({
      id: new FormControl(),
      fullname: new FormControl(),
      emailid: new FormControl(),
      gender: new FormControl(),
      birthday: new FormControl(),
      alternateNo: new FormControl()
    });
  }
  ngOnInit(): void {
    this.profiledata = JSON.parse(localStorage.getItem('profile') || '{}');
    this.id = this.profiledata.id;
    // this.disableTextbox = false;
   // console.log(this.profiledata.name);
  }

  //update
  onSubmit() {
    this.Myservice.updateprofile(this.form.value);
    console.log(this.form.value);
  }

  //delete
  onDelete() {
    this.Myservice.deleteprofile(this.id);
  }
}
