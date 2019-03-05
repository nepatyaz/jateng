import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PembayaranRoutingModule } from './pembayaran-routing.module';
import { BayarMPNComponent } from './bayar-mpn/bayar-mpn.component';
import { BayarPKBComponent } from './bayar-pkb/bayar-pkb.component';
import { BillpaymentComponent } from './billpayment/billpayment.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatDatepickerModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    PembayaranRoutingModule,
    MDBBootstrapModule,
    MatDatepickerModule
  ],
  declarations: [
    BayarMPNComponent,
    BayarPKBComponent,
    BillpaymentComponent
  ]
})
export class PembayaranModule { }
