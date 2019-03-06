import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { WebcamModule } from 'ngx-webcam';
import { Pagination2Component } from './pagination2/pagination2.component';
import { PaginationComponent } from './pagination/pagination.component';
import { WebcamComponent } from './webcam/webcam.component';
import { ButtonComponent } from './button/button.component';
// import { MatPaginatorModule, MatFormFieldModule, MatTableModule, MatMenuModule } from '@angular/material';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from '../material';



@NgModule({
  imports: [
    CommonModule,
    WebcamModule,
    MDBBootstrapModule,
    // MatFormFieldModule,
    // MatTableModule,
    // MatMenuModule,
    MaterialModule,
    TestRoutingModule,
    // MatPaginatorModule
  ],
  declarations: [
    Pagination2Component,
    PaginationComponent,
    WebcamComponent,
    ButtonComponent
  ]
})
export class TestModule { }
