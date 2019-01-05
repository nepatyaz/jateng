import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface myData {
  status: String,
  message: String
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetail(userid, password) {
    //post detail ke http server balikan user info jika benar
    return this.http.post<myData>('/user', {
      userid,
      password
    })
  }
}
