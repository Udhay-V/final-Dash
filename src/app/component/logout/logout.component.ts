import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router ) { 
    
  }

  ngOnInit() {
  }
  
  logout()
  {
    localStorage.removeItem("profile");
    console.log("logout Sccessfull")
    alert("Logout successfull")
    this.router.navigate(['login']);
}
}
