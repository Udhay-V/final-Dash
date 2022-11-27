
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  // username: any;
  data: any;
  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('form') || '{}');
    // this.username = this.data[0].name;
    // console.log(this.username);
  }
}
