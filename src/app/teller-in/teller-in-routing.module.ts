import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TellerInComponent } from './teller-in/teller-in.component';
import { TellerInSetoranTunaiComponent } from './teller-in-setoran-tunai/teller-in-setoran-tunai.component';
import { TellerInPenarikanTunaiComponent } from './teller-in-penarikan-tunai/teller-in-penarikan-tunai.component';
import { TellerInTranPindahBukuComponent } from './teller-in-tran-pindah-buku/teller-in-tran-pindah-buku.component';
import { TellerInPindahBukuBedaUangComponent } from './teller-in-pindah-buku-beda-uang/teller-in-pindah-buku-beda-uang.component';
import { TellerInSelisihKasComponent } from './teller-in-selisih-kas/teller-in-selisih-kas.component';
import { TellerInSinkronFinComponent } from './teller-in-sinkron-fin/teller-in-sinkron-fin.component';

const routes: Routes = [
  { path: '', component: TellerInComponent },
  { path: 'setorantunai', component: TellerInSetoranTunaiComponent },
  { path: 'penarikantunai', component: TellerInPenarikanTunaiComponent },
  { path: 'pindahbuku', component: TellerInTranPindahBukuComponent },
  { path: 'pinbukbedauang', component: TellerInPindahBukuBedaUangComponent },
  { path: 'selisihkas', component: TellerInSelisihKasComponent },
  { path: 'sinkronfin', component: TellerInSinkronFinComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TellerInRoutingModule { }
