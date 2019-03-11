import { Injectable } from '@angular/core';
import { configuration } from '../configuration';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = configuration.serverHost;

  private headers = new HttpHeaders({
    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).token
  });

  private options = { headers: this.headers };

  constructor(private http : HttpClient) { }

    //dapatkan semua data user 
    getUserLog(userid) {
      let url = this.apiUrl + "user/userlog/"+userid;
      console.log(url);
      return this.http.get(url, this.options)
        .pipe(
          tap(_ => console.log('userservice -> fetched data ')),
          // catchError(this.handleError('getData', []))
        );
    }

}
