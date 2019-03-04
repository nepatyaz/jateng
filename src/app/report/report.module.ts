import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReportCetakRekeningComponent } from './cetak-rekening/cetak-rekening.component'; 
import { ReportRoutingModule } from './report-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule,
    MDBBootstrapModule
  ],
  declarations: [
    ReportCetakRekeningComponent
  ],
//   exports: [
//     ReportCetakRekeningComponent
// ]
})
export class ReportModule { }