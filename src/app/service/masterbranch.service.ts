import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { configuration } from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class MasterBranchService {

  apiUrl = configuration.serverHost;

  private headers = new HttpHeaders({
    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).token
  });

  private options = { headers: this.headers };
  constructor(private http : HttpClient) { }

  getBranchById(userid) {
    let url = this.apiUrl + "branch/getbranch/"+userid;
    console.log(url);
    return this.http.get(url, this.options)
      .pipe(
        tap(_ => console.log('branch service -> fetched data ')),
        // catchError(this.handleError('getData', []))
      );
  }

}
