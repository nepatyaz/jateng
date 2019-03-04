import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { RekeningKoranRoutingModule } from './rekening-koran-routing.module';
import { CetakrekeningComponent } from './cetakrekening/cetakrekening.component';
import { DaftarrekeningComponent } from './daftarrekening/daftarrekening.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatDatepickerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RekeningKoranRoutingModule,
    MDBBootstrapModule,
    MatDatepickerModule
  ],
  declarations: [
    DaftarrekeningComponent,
    CetakrekeningComponent
  ]
})
export class RekeningKoranModule { }
