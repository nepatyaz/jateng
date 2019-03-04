import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaftarUserSignOnComponent } from './daftar-user-sign-on/daftar-user-sign-on.component';
import { AktifitasuserComponent } from './aktifitasuser/aktifitasuser.component';
import { ChangeOfflineLimitComponent } from './change-offline-limit/change-offline-limit.component';
import { TanggalbisnisComponent } from './tanggalbisnis/tanggalbisnis.component';
import { UploadTransaksiComponent } from './upload-transaksi/upload-transaksi.component';
import { WebBranchStatusComponent } from './web-branch-status/web-branch-status.component';

const routes: Routes = [
  { path: '', component: DaftarUserSignOnComponent },
  { path: 'daftaruser', component: DaftarUserSignOnComponent },
  { path: 'aktifitasuser', component: AktifitasuserComponent },
  { path: 'changeoffline', component: ChangeOfflineLimitComponent },
  { path: 'tanggalbisnis', component: TanggalbisnisComponent },
  { path: 'uploadtransaksi', component: UploadTransaksiComponent },
  { path: 'webbranchstatus', component: WebBranchStatusComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeRoutingModule { }
