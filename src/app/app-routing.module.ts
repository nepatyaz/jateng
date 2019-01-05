import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DaftarUserSignOnComponent } from './administrative/daftar-user-sign-on/daftar-user-sign-on.component';
import { WebBranchStatusComponent } from './administrative/web-branch-status/web-branch-status.component';
import { TellerInSetoranTunaiComponent } from './teller-in/teller-in-setoran-tunai/teller-in-setoran-tunai.component';
import { TellerInPenarikanTunaiComponent } from './teller-in/teller-in-penarikan-tunai/teller-in-penarikan-tunai.component';
import { TellerInSelisihKasComponent } from './teller-in/teller-in-selisih-kas/teller-in-selisih-kas.component';
import { TellerInSinkronFinComponent } from './teller-in/teller-in-sinkron-fin/teller-in-sinkron-fin.component';
import { TellerInPindahBukuBedaUangComponent } from './teller-in/teller-in-pindah-buku-beda-uang/teller-in-pindah-buku-beda-uang.component';
import { TellerInTranPindahBukuComponent } from './teller-in/teller-in-tran-pindah-buku/teller-in-tran-pindah-buku.component';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { TanggalbisnisComponent } from './administrative/tanggalbisnis/tanggalbisnis.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'administrator/daftaruser', component: DaftarUserSignOnComponent },
  { path: 'administrator/webbranchstatus', component: WebBranchStatusComponent },
  { path: 'administrator/settglbisnis', component: TanggalbisnisComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'tellerin/setorantunai', component: TellerInSetoranTunaiComponent },
  { path: 'tellerin/penarikantunai', component: TellerInPenarikanTunaiComponent },
  { path: 'tellerin/selisihkas', component: TellerInSelisihKasComponent },
  { path: 'tellerin/sinkronfin', component: TellerInSinkronFinComponent },
  { path: 'tellerin/pinbukbedauang', component: TellerInPindahBukuBedaUangComponent },
  { path: 'tellerin/pindahbuku', component: TellerInTranPindahBukuComponent },
  { path: '**', component: PageNotFoundComponent }
=======
=======

>>>>>>> parent of 99d688eb... merge
import { CariBaruUserComponent } from './usermaintenance/cari-baru-user/cari-baru-user.component';
import { GantiPasswordComponent } from './usermaintenance/ganti-password/ganti-password.component';
import { TutupUserComponent } from './usermaintenance/tutup-user/tutup-user.component';

const routes: Routes = [
=======

const routes: Routes = [
>>>>>>> parent of 99886f17... tambahan routing
  {path : '', component : LoginFormComponent},
  {path : 'administrator/daftaruser', component : DaftarUserSignOnComponent},
  {path : 'administrator/webbranchstatus', component : WebBranchStatusComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'login', component : LoginFormComponent},
  {path : 'tellerin/setorantunai', component : TellerInSetoranTunaiComponent},
  {path : 'tellerin/penarikantunai', component : TellerInPenarikanTunaiComponent},
  {path : 'tellerin/selisihkas', component : TellerInSelisihKasComponent},
  {path : 'tellerin/sinkronfin', component : TellerInSinkronFinComponent},
  {path : 'tellerin/pinbukbedauang', component : TellerInPindahBukuBedaUangComponent},
  {path : 'tellerin/pindahbuku', component : TellerInTranPindahBukuComponent},
<<<<<<< HEAD
  {path : 'tellerin/userbaru', component : CariBaruUserComponent},
  {path : 'tellerin/ubahpassword', component : GantiPasswordComponent},
  {path : 'tellerin/statususer', component : TutupUserComponent},
  {path : '**', component : PageNotFoundComponent}
>>>>>>> 78eeb2af51bb1d64c8442e1e4874831350739e86
=======
  {path : '**', component : PageNotFoundComponent}
>>>>>>> parent of 99886f17... tambahan routing

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
<<<<<<< HEAD
export const routingComponents = [DashboardComponent, PageNotFoundComponent, LoginFormComponent,
  DaftarUserSignOnComponent, WebBranchStatusComponent, TellerInSetoranTunaiComponent, 
  TellerInPenarikanTunaiComponent, TellerInSelisihKasComponent, TellerInSinkronFinComponent, 
  TellerInPindahBukuBedaUangComponent, TellerInTranPindahBukuComponent,TanggalbisnisComponent]
=======
export const routingComponents  = [DashboardComponent, PageNotFoundComponent,LoginFormComponent,DaftarUserSignOnComponent,WebBranchStatusComponent,TellerInSetoranTunaiComponent, TellerInPenarikanTunaiComponent,TellerInSelisihKasComponent,TellerInSinkronFinComponent,TellerInPindahBukuBedaUangComponent,TellerInTranPindahBukuComponent,CariBaruUserComponent,GantiPasswordComponent,TutupUserComponent]
>>>>>>> 78eeb2af51bb1d64c8442e1e4874831350739e86
=======
export const routingComponents  = [DashboardComponent, PageNotFoundComponent,LoginFormComponent,DaftarUserSignOnComponent,WebBranchStatusComponent,TellerInSetoranTunaiComponent, TellerInPenarikanTunaiComponent,TellerInSelisihKasComponent,TellerInSinkronFinComponent,TellerInPindahBukuBedaUangComponent,TellerInTranPindahBukuComponent]
>>>>>>> parent of 99886f17... tambahan routing
