import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TellerInRoutingModule } from './teller-in-routing.module';
import { TellerInComponent } from './teller-in/teller-in.component';
import { TellerInPenarikanTunaiComponent } from './teller-in-penarikan-tunai/teller-in-penarikan-tunai.component';
import { TellerInPindahBukuBedaUangComponent } from './teller-in-pindah-buku-beda-uang/teller-in-pindah-buku-beda-uang.component';
import { TellerInSelisihKasComponent } from './teller-in-selisih-kas/teller-in-selisih-kas.component';
import { TellerInSetoranTunaiComponent } from './teller-in-setoran-tunai/teller-in-setoran-tunai.component';
import { TellerInSinkronFinComponent } from './teller-in-sinkron-fin/teller-in-sinkron-fin.component';
import { TellerInTranPindahBukuComponent } from './teller-in-tran-pindah-buku/teller-in-tran-pindah-buku.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { MatDatepickerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TellerInRoutingModule,
    MDBBootstrapModule,
    FormsModule, ReactiveFormsModule,
    NgxCurrencyModule,
    MatDatepickerModule
  ],
  declarations: [
    TellerInComponent,
    TellerInPenarikanTunaiComponent,
    TellerInPindahBukuBedaUangComponent,
    TellerInSelisihKasComponent,
    TellerInSetoranTunaiComponent,
    TellerInSinkronFinComponent,
    TellerInTranPindahBukuComponent
  ]
})
export class TellerInModule { }
