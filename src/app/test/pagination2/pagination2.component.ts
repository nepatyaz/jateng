import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import {PageEvent} from '@angular/material';
import { TableService } from '../../service/table.service';





@Component({
  selector: 'app-pagination2',
  templateUrl: './pagination2.component.html',
  styleUrls: ['./pagination2.component.css']
})
export class Pagination2Component implements OnInit {

   // MatPaginator Inputs
   length
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10, 25, 100];
 
   // MatPaginator Output
   pageEvent: PageEvent;

  constructor(private http: HttpClient, private tabel : TableService) { }

  ngOnInit() {
    // this.totaldata();
    this.tabel.totalData().subscribe(data=>{
      this.length = data[0].total;
      console.log(data[0].total);
    });  


  }

  paginationEvent(event){
    var recStart = event.pageIndex * event.pageSize;
    // console.log(JSON.stringify("Current page index: " + event.pageIndex));
    // console.log(JSON.stringify("length page index: " + event.length));
    // console.log(JSON.stringify("pageSize page index: " + event.pageSize));
    console.log("Record Start : ", recStart);
    console.log("?size="+event.length+"&page="+recStart+"&limit="+ event.pageSize);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    console.log(this.pageSizeOptions)
  
  }




  totalData() {
    //return this.http.get('https://my-json-server.typicode.com/nepatyaz/rest/statu')
    return this.http.get('/comments/jumlah').subscribe(data=>{
      console.log("jumlah data : ", data);
    });
  }


}


export interface Comment {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}