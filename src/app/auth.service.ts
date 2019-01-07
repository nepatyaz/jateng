import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface myData {
  status: String,
  message: String,
  role: String
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInstatus = false
  
  setLoggedIn(value:boolean){
    var stringValue = sessionStorage.getItem(status);
    var boolValue = (stringValue === "OK"); 
    this.loggedInstatus = boolValue;
    console.log(boolValue)
  }

  get isloggedin(){
    return this.loggedInstatus
  }
  constructor(private http: HttpClient) { }

  getUserDetail(userid, password) {
    //post detail ke http server balikan user info jika benar
    return this.http.post<myData>('/user', {
      userid,
      password 
    })
  }

  cekLogin(){
    console.log(sessionStorage.getItem("isloggedin"))
  }
  
}
