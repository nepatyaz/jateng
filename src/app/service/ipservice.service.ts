import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpserviceService {

  constructor(private http: HttpClient) { }

  getIpAddress() {
    return this.http.get('https://api.ipify.org/?format=json');
  }

  private handleError(error: HttpErrorResponse):
    Observable<any> {
    //Log error in the browser console
    console.error('observable error: ', error);

    return Observable.throw(error);
  }

}
