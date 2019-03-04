import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RekeningRoutingModule } from './rekening-routing.module';
import { BarsheetRekeningComponent } from './barsheet-rekening/barsheet-rekening.component';
import { PencarianDaftarRekeningComponent } from './pencarian-daftar-rekening/pencarian-daftar-rekening.component';
import { MatProgressSpinnerModule, MatPaginatorModule, MatTableModule,MatSortModule, } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  imports: [
    CommonModule,
    RekeningRoutingModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MDBBootstrapModule, 
    MatTableModule, 
    MatSortModule
  ],
  declarations: [BarsheetRekeningComponent,PencarianDaftarRekeningComponent]
})
export class RekeningModule { }
