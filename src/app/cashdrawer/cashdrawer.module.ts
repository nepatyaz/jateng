import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashdrawerRoutingModule } from './cashdrawer-routing.module';
import { BalancingComponent } from './balancing/balancing.component';
import { DenominasiComponent } from './denominasi/denominasi.component';
import { SinkronisasiComponent } from './sinkronisasi/sinkronisasi.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  imports: [
    CommonModule,
    CashdrawerRoutingModule,
    MDBBootstrapModule
  ],
  declarations: [
    DenominasiComponent,
    SinkronisasiComponent,
    BalancingComponent
  ]
})
export class CashdrawerModule { }
