import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtorisasiRekeningKonfidensialComponent } from './otorisasi-rekening-konfidensial/otorisasi-rekening-konfidensial.component';
import { OtorisasiCifComponent } from './otorisasi-cif/otorisasi-cif.component';
import { OtorisasiRekeningComponent } from './otorisasi-rekening/otorisasi-rekening.component';

const routes: Routes = [
  { path: '', component: OtorisasiRekeningKonfidensialComponent },
  { path: 'otorisasirekeningkonfidensial', component: OtorisasiRekeningKonfidensialComponent },
  { path: 'otorisasicif', component: OtorisasiCifComponent },
  { path: 'otorisasirekening', component: OtorisasiRekeningComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtorisasiheadRoutingModule { }
