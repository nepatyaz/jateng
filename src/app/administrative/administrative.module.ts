import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import {  MatPaginatorModule, MatDatepickerModule,} from '@angular/material';
import { AdministrativeRoutingModule } from './administrative-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AktifitasuserComponent } from './aktifitasuser/aktifitasuser.component';
import { ChangeOfflineLimitComponent } from './change-offline-limit/change-offline-limit.component';
import { DaftarUserSignOnComponent } from './daftar-user-sign-on/daftar-user-sign-on.component';
import { TanggalbisnisComponent } from './tanggalbisnis/tanggalbisnis.component';
import { UploadTransaksiComponent } from './upload-transaksi/upload-transaksi.component';
import { WebBranchStatusComponent } from './web-branch-status/web-branch-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import { NgxCurrencyModule } from 'ngx-currency';


@NgModule({
  imports: [
    CommonModule,
    AdministrativeRoutingModule,
    MDBBootstrapModule,
    // MatPaginatorModule,
    // MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxCurrencyModule
  ],
  declarations: [
    AktifitasuserComponent,
    ChangeOfflineLimitComponent,
    DaftarUserSignOnComponent,
    TanggalbisnisComponent,
    UploadTransaksiComponent,
    WebBranchStatusComponent
  ]
})
export class AdministrativeModule { }
