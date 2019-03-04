import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportCetakRekeningComponent } from '../report/cetak-rekening/cetak-rekening.component';

const routes: Routes = [

  { path: '', component: ReportCetakRekeningComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
