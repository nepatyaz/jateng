import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PassbookRoutingModule } from './passbook-routing.module';
import { CetakPassbookComponent } from './cetak-passbook/cetak-passbook.component';
import { CheckTaspenComponent } from './check-taspen/check-taspen.component';
import { HeaderPassbookComponent } from './header-passbook/header-passbook.component';
import { UlangPassbookComponent } from './ulang-passbook/ulang-passbook.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatDatepickerModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    PassbookRoutingModule,
    MDBBootstrapModule,
    MatDatepickerModule
  ],
  declarations: [
    CetakPassbookComponent,
    CheckTaspenComponent,
    HeaderPassbookComponent,
    UlangPassbookComponent
  ]
})
export class PassbookModule { }
