import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtorisasiheadRoutingModule } from './otorisasihead-routing.module';
import { OtorisasiRekeningKonfidensialComponent } from './otorisasi-rekening-konfidensial/otorisasi-rekening-konfidensial.component';
import { OtorisasiCifComponent } from './otorisasi-cif/otorisasi-cif.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { OtorisasiRekeningComponent } from './otorisasi-rekening/otorisasi-rekening.component';


@NgModule({
  imports: [
    CommonModule,
    OtorisasiheadRoutingModule,
    MDBBootstrapModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [
    OtorisasiRekeningKonfidensialComponent,
    OtorisasiRekeningComponent,
    OtorisasiCifComponent
  ]
})
export class OtorisasiheadModule { }
