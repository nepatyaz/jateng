import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import {PageEvent} from '@angular/material';



@Component({
  selector: 'app-pagination2',
  templateUrl: './pagination2.component.html',
  styleUrls: ['./pagination2.component.css']
})
export class Pagination2Component implements OnInit {

   // MatPaginator Inputs
   length = 100;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10, 25, 100];
 
   // MatPaginator Output
   pageEvent: PageEvent;


  constructor(private http: HttpClient) { }


  ngOnInit() {
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

}