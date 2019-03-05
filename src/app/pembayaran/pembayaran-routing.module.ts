import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BayarMPNComponent } from './bayar-mpn/bayar-mpn.component';
import { BayarPKBComponent } from './bayar-pkb/bayar-pkb.component';
import { BillpaymentComponent } from './billpayment/billpayment.component';

const routes: Routes = [
  { path: '', component: BayarPKBComponent },
  { path: 'bayarpkb', component: BayarPKBComponent },
  { path: 'bayarmpn', component: BayarMPNComponent },
  { path: 'billpayment', component: BillpaymentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PembayaranRoutingModule { }
