import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  profile: any;
  nodeApiUrl = "http://localhost:3400/api/data/";
  constructor(private router: Router, private http: HttpClient) { }
  //create
  // Adddata(data: any): Observable<any> {
  //   console.log("called,data");
  //   const header = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };
  //   return this.http.post<any>(this.nodeApiUrl + 'create', data, header);
  // }

  //create
  // Adddata(data: any){
  //   const header = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };
  //   console.log("called", data)
  //   var result = this.http.post<any>(this.nodeApiUrl + 'create',data, header).subscribe(data => {
  //     console.log(data);
  //     console.log(result);
  //     return data
  //   });
  //   console.log("call", result)
  // }


  //create
  createprofile(profile: any) {
    const header = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };
    console.log("called", profile)
    var result = this.http.post<any>(this.nodeApiUrl + 'create', profile, header).subscribe(data => {
    console.log(data);

      if (data.success) {
        localStorage.setItem('profile', JSON.stringify(data.profile));
        alert("Registered succefully")
        this.router.navigate(['login']);
      }
      else {
        alert("Request failed")
        //return {message:"Request failed"}
      }
    });
  }

  //checklogin
  Checklogin(logindata: any) {
    const header = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };
    console.log("called", logindata[0])
    var result = this.http.post<any>(this.nodeApiUrl + 'login', logindata[0], header).subscribe(data => {
      console.log(data);

      if (data.profile) {
        localStorage.setItem('profile', JSON.stringify(data.profile));
        this.router.navigate(['Calculator']);
      }
      else {
        console.log('enter valid Email & password');
      }
      console.log(result);
      return data
    });
    console.log("call", result)
  }

  //get
  Getdata() {
    return this.http.get<any>(this.nodeApiUrl + 'Get');
  }
  GetdatafromNodeAPI() {
    return this.http.get<any>(this.nodeApiUrl + 'Get');
  }

  //update
  updateprofile(profiledata: any) {
    const header = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };
    console.log("called", profiledata)
    var result = this.http.post<any>(this.nodeApiUrl + 'update', profiledata, header).subscribe(data => {
      console.log(data);
      console.log(result);
      return data
    });
    console.log("call", result)
  }

  //delete
  deleteprofile(id: any) {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: { id: id },
    };
    var result = this.http.delete(this.nodeApiUrl + 'delete', options).subscribe(data => {
      console.log(data);
      console.log(result);
      return data
    });
    console.log("call", result)
  }
}
