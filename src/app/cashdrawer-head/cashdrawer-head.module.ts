import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CashdrawerHeadRoutingModule } from './cashdrawer-head-routing.module';
import { CashdrawerHeadComponent } from '../cashdrawer-head/cashdrawer-head.component';


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule,
    CashdrawerHeadRoutingModule
  ],
  declarations: [
    CashdrawerHeadComponent
  ]
})
export class CashdrawerHeadModule { }
