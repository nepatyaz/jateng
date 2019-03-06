import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Comment } from '../pagination2/pagination2.component';
import { TableService } from '../../service/table.service';



@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'gender'];
  exampleDatabase: ExampleHttpDatabase;
  // data: GithubIssue[] = [];
  data: Test[] = [];
  items: Test[] = [];

  isError = false;
  errorMessage: string;

  public dataSource = new MatTableDataSource<Test>();

  // MatPaginator Inputs
  length
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, private tabel: TableService, private _elementRef: ElementRef) { }


  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDatabase(this.http);
    this.getFirstData();
    this.getTotalData();
  }

  paginationEvent(event) {
    var recStart = event.pageIndex * event.pageSize;

    console.log("?page=" + event.pageIndex + "&start=" + recStart + "&limit=" + event.pageSize);
    this.exampleDatabase.getPageData("?page=" + event.pageIndex + "&start=" + recStart + "&limit=" + event.pageSize)
      .subscribe(
        res => {
          this.isError = false
          this.dataSource.data = res as Test[];
          console.log("isi source : ", this.dataSource);
        },
        err => {
          this.isError = true;
          this.errorMessage = "Gagal Meload Data ke Tabel : " + err.error;
        }
      )
  }


  applyFilter(filterValue: string) {
    if (filterValue.length > 1) {
      let searchUrl = "?&filter=" + filterValue
      console.log("nilai filter :", searchUrl)

      //cari data sesuai input filter 
      this.exampleDatabase.getSearch(searchUrl)
        .subscribe(
          resp => {
            var object1 = resp
            Object.keys(object1); // this returns all properties in an array ["a", "b", "c"]
            var jumlah = object1[Object.keys(object1)[Object.keys(object1).length - 1]]
            this.length = jumlah.total
            console.log("jumlah : ", jumlah.total);
            this.dataSource.data = resp as Test[];
          }
        );

    } else {
      this.getTotalData();
      this.getFirstData();
    }



    // this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  testing() {
    var nilai = this._elementRef.nativeElement.querySelector('#inputSearch').value;
    console.log(nilai);
  }



  getTotalData() {
    //load jumlah data maksimum dari tabel test 
    this.tabel.totalDataTest().subscribe(
      data => {
        this.length = data[0].total;
        console.log(data[0].total);
      },
      err => {
        alert("Gagal Meload Jumlah Data : " + err.error)
      }
    );
  }

  getFirstData() {

    //load dataawal untuk di tampilkan ke tabel
    this.exampleDatabase.getFirstData()
      .subscribe(
        res => {
          this.isError = false;
          this.dataSource.data = res as Test[];
          console.log("isi source : ", this.dataSource);
        },
        err => {
          this.isError = true;
          this.errorMessage = "Gagal Meload Data ke Tabel : " + err.error;
        }
      )
  }

}

export interface TestApi {
  items: Comment[];
}

export interface Test {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

export class ExampleHttpDatabase {
  constructor(private http: HttpClient) { }

  getFirstData() {
    const href = 'api/testdata';
    const requestUrl = `${href}?page=0&start=0&limit=10`;;
    // `${href}?q=repo:angular/material2&page=${page + 1}`;
    console.log(requestUrl);
    return this.http.get(requestUrl);
  }

  getPageData(url) {
    const href = 'api/testdata';
    const requestUrl = href + url;
    // `${href}?q=repo:angular/material2&page=${page + 1}`;
    console.log(requestUrl);
    return this.http.get(requestUrl);
  }

  getSearch(url) {
    const href = 'api/testsearch';
    const requestUrl = href + url;
    console.log("url kirim : ", requestUrl);
    return this.http.get(requestUrl);
  }

}