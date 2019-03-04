import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaftarrekeningComponent } from './daftarrekening/daftarrekening.component';
import { CetakrekeningComponent } from './cetakrekening/cetakrekening.component';

const routes: Routes = [
  { path: '', component: DaftarrekeningComponent },
  { path: 'cetak', component: CetakrekeningComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class RekeningKoranRoutingModule { }
