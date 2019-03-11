import { Injectable } from '@angular/core';
import { configuration } from '../configuration';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  apiUrl = configuration.serverHost;

  constructor(private http: HttpClient) {}


  //dapatkan semua data user 
  Login(userid, password) {
    let url = this.apiUrl + "user/login";
    console.log(url);
    return this.http.post(url, {userid, password})
      .pipe(
        tap(_ => console.log('userservice -> fetched data ')),
        // catchError(this.handleError('getData', []))
      );
  }

}
