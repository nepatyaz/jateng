import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div style="margin-top: 5
  0vh;margin-left: 20px;margin-right: 20px;">
     <!-- Start your project here-->
      <div class="d-flex flex-column h-100">
         <div id="outer" class="d-flex flex-column flex-grow">
         <div class="card">
              <div class="card-body">
              <H2>
                Halaman Yang Diminta Tidak Ada!
              </H2>
              </div>
            </div>
          </div>
      </div>
    </div> 
  `,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
