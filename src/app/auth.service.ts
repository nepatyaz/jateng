import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


interface myData {
  status: String,
  message: String,
  role: String,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //private loggedInstatus

  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  get isloggedin() {
    return this.setLoggedIn
  }
  constructor(private http : HttpClient) {
  }

  getUserDetail(userid, password) {
    //post detail ke http server balikan user info jika benar
    return this.http.post<myData>('/user', {
      userid,
      password,
    })
  }



}
