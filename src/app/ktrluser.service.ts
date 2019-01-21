import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KtrluserService {

  constructor(private http: HttpClient) {
  }
  getData() {
    //return this.http.get('https://my-json-server.typicode.com/nepatyaz/rest/status')
    return this.http.get('/ktrluser/')
  }
  getData2(id) {
    //return this.http.get('https://my-json-server.typicode.com/nepatyaz/rest/status')
    return this.http.get('/view_ktrluser/'+id)
  }
}
