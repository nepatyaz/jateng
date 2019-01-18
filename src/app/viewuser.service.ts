import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewuserService {

  constructor(private http: HttpClient) {
  }
  getData() {
    return this.http.get('/view_ktrluser/')
  }
}
