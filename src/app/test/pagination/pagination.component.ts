import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Comment } from '../pagination2/pagination2.component';
import { TableService } from '../../service/table.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'body'];
  exampleDatabase: ExampleHttpDatabase;
  // data: GithubIssue[] = [];
  data: Comment[] = [];
  items: Comment[] = [];


  public dataSource = new MatTableDataSource<Comment>();


  // resultsLength = 499;
  // isLoadingResults = true;
  // isRateLimitReached = false;

  // MatPaginator Inputs
  length
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, private tabel: TableService) { }


  ngOnInit() {

  }



  ngAfterViewInit() {

    this.exampleDatabase = new ExampleHttpDatabase(this.http);
    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.tabel.totalData().subscribe(data => {
      this.length = data[0].total;
      console.log(data[0].total);
    });

    this.exampleDatabase.getData()
      .subscribe(res => {
        this.dataSource.data = res as Comment[];
        console.log("isi source : ", this.dataSource);
      })





    // this.dataSource.paginator = this.paginator;
    // merge(this.paginator.page)
    //   .pipe(
    //     startWith({}),
    //     switchMap(() => {
    //       this.isLoadingResults = true;
    //       return this.exampleDatabase!.getRepoIssues(this.paginator.pageIndex);
    //     }),
    //     map(data => {
    //       // Flip flag to show that loading has finished.
    //       this.isLoadingResults = false;
    //       this.isRateLimitReached = false;
    //       // this.resultsLength = data.total_count;
    //       console.log("data map : ", data);
    //       return data.items;
    //     }),
    //     catchError(() => {
    //       this.isLoadingResults = false;
    //       // Catch if the GitHub API has reached its rate limit. Return empty data.
    //       // this.isRateLimitReached = true;
    //       return observableOf([]);
    //     })
    //   ).subscribe(data => {
    //     this.data = data
    //     console.log(this.data)
    //   });
  }


  paginationEvent(event) {
    var recStart = event.pageIndex * event.pageSize;
    // console.log(JSON.stringify("Current page index: " + event.pageIndex));
    // console.log(JSON.stringify("length page index: " + event.length));
    // console.log(JSON.stringify("pageSize page index: " + event.pageSize));
    console.log("Record Start : ", recStart);
    console.log("?size=" + event.length + "&page=" + recStart + "&limit=" + event.pageSize);
    this.exampleDatabase.getPage("?size=" + event.length + "&page=" + recStart + "&limit=" + event.pageSize)
    .subscribe(res => {
      this.dataSource.data = res as Comment[];
      console.log("isi source : ", this.dataSource);
    })

  }


}




export interface CommentApi {
  items: Comment[];
}



export interface Comment {
  id: string;
  name: string;
  email: string;
  body: string;
}


// export class ExampleHttpDatabase {
//   constructor(private http: HttpClient) { }

//   getRepoIssues(page: number): Observable<GithubApi> {
//     const href = 'https://api.github.com/search/issues';
//     const requestUrl =
//       `${href}?q=repo:angular/material2&page=${page + 1}`;
//     console.log(requestUrl);
//     return this.http.get<GithubApi>(requestUrl);
//   }
// }
export class ExampleHttpDatabase {
  constructor(private http: HttpClient) { }

  getRepoIssues(page: number): Observable<CommentApi> {
    const href = 'commentsData';
    const requestUrl =
      `${href}?size=1&page=${page}&limit=5`;
    // `${href}?q=repo:angular/material2&page=${page + 1}`;
    console.log(requestUrl);
    return this.http.get<CommentApi>(requestUrl);
  }

  getData() {
    const href = 'commentsData';
    const requestUrl =
      `${href}?size=1&page=0&limit=10`;
    // `${href}?q=repo:angular/material2&page=${page + 1}`;
    console.log(requestUrl);
    return this.http.get(requestUrl);
  }

  getPage(url) {
    const href = 'commentsData';
    const requestUrl = href + url;
    // `${href}?q=repo:angular/material2&page=${page + 1}`;
    console.log(requestUrl);
    return this.http.get(requestUrl);
  }
}