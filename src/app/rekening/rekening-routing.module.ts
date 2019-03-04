import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarsheetRekeningComponent } from './barsheet-rekening/barsheet-rekening.component';
import { PencarianDaftarRekeningComponent } from './pencarian-daftar-rekening/pencarian-daftar-rekening.component';


const routes: Routes = [
  { path: '', component: PencarianDaftarRekeningComponent },
  { path: 'pencarianbarsheetrekening', component: BarsheetRekeningComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RekeningRoutingModule { }
