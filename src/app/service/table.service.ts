import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


interface myData {
  total: number 
}

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http : HttpClient) {}

  totalData() {
    //post detail ke http server balikan user info jika benar
    return this.http.get('/comments/jumlah')
  }
  totalDataTest() {
    //post detail ke http server balikan user info jika benar
    return this.http.get('/api/jumlahtest')
  }
}
