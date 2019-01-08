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
import { TanggalbisnisComponent } from './administrative/tanggalbisnis/tanggalbisnis.component';
import { AktifitasuserComponent } from './administrative/aktifitasuser/aktifitasuser.component';
import { CariBaruUserComponent } from './usermaintenance/cari-baru-user/cari-baru-user.component';
import { GantiPasswordComponent } from './usermaintenance/ganti-password/ganti-password.component';
import { KontrolUserComponent } from './usermaintenance/kontrol-user/kontrol-user.component';
import { TutupUserComponent } from './usermaintenance/tutup-user/tutup-user.component';
import { CetakPassbookComponent } from './passbook/cetak-passbook/cetak-passbook.component';
import { HeaderPassbookComponent } from './passbook/header-passbook/header-passbook.component';
import { UlangPassbookComponent } from './passbook/ulang-passbook/ulang-passbook.component';
import { CheckTaspenComponent } from './passbook/check-taspen/check-taspen.component';
import { CariKartuatmComponent } from './kartu/cari-kartuatm/cari-kartuatm.component';
import { BayarPKBComponent } from './pembayaran/bayar-pkb/bayar-pkb.component';
import { BayarMPNComponent } from './pembayaran/bayar-mpn/bayar-mpn.component';
import { BillpaymentComponent } from './pembayaran/billpayment/billpayment.component';
import { DenominasiComponent } from './cashdrawer/denominasi/denominasi.component';
import { LoginGuard } from './guard/login.guard';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';


const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'daftaruser',
        component: DaftarUserSignOnComponent
      },
      { path: 'administrator/daftaruser', component: DaftarUserSignOnComponent },
      { path: 'administrator/webbranchstatus', component: WebBranchStatusComponent },
      { path: 'administrator/tglbisnis', component: TanggalbisnisComponent },
      { path: 'administrator/aktifitasuser', component: AktifitasuserComponent },
      { path: 'tellerin/setorantunai', component: TellerInSetoranTunaiComponent },
      { path: 'tellerin/penarikantunai', component: TellerInPenarikanTunaiComponent },
      { path: 'tellerin/selisihkas', component: TellerInSelisihKasComponent },
      { path: 'tellerin/sinkronfin', component: TellerInSinkronFinComponent },
      { path: 'tellerin/pinbukbedauang', component: TellerInPindahBukuBedaUangComponent },
      { path: 'tellerin/pindahbuku', component: TellerInTranPindahBukuComponent },
      { path: 'maintencance/caribaruuser', component: CariBaruUserComponent },
      { path: 'maintencance/gantisandi', component: GantiPasswordComponent },
      { path: 'maintencance/kontroluser', component: KontrolUserComponent },
      { path: 'maintencance/tutupuser', component: TutupUserComponent },
      { path: 'maintencance/ctkpassbook', component: CetakPassbookComponent },
      { path: 'maintencance/hdrpassbook', component: HeaderPassbookComponent },
      { path: 'maintencance/ulangpassbook', component: UlangPassbookComponent },
      { path: 'maintencance/checktaspen', component: CheckTaspenComponent },
      { path: 'kartu/carikartuatm', component: CariKartuatmComponent },
      { path: 'pembayaran/bayarpkb', component: BayarPKBComponent },
      { path: 'pembayaran/bayarmpn', component: BayarMPNComponent },
      { path: 'pembayaran/billpayment', component: BillpaymentComponent },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginFormComponent }
      
    ]
  },
<<<<<<< HEAD
  //{ path: 'administrator/daftaruser', component: DaftarUserSignOnComponent },


=======
  { path: 'administrator/daftaruser', component: DaftarUserSignOnComponent },
  { path: 'administrator/webbranchstatus', component: WebBranchStatusComponent },
  { path: 'administrator/tglbisnis', component: TanggalbisnisComponent },
  { path: 'administrator/aktifitasuser', component: AktifitasuserComponent },
  {
    path: 'dashboard',
    component: HomeLayoutComponent,
    canActivate: [LoginGuard]
  },
  { path: 'tellerin/setorantunai', component: TellerInSetoranTunaiComponent },
  { path: 'tellerin/penarikantunai', component: TellerInPenarikanTunaiComponent },
  { path: 'tellerin/selisihkas', component: TellerInSelisihKasComponent },
  { path: 'tellerin/sinkronfin', component: TellerInSinkronFinComponent },
  { path: 'tellerin/pinbukbedauang', component: TellerInPindahBukuBedaUangComponent },
  { path: 'tellerin/pindahbuku', component: TellerInTranPindahBukuComponent },
  { path: 'maintencance/caribaruuser', component: CariBaruUserComponent },
  { path: 'maintencance/gantisandi', component: GantiPasswordComponent },
  { path: 'maintencance/kontroluser', component: KontrolUserComponent },
  { path: 'maintencance/tutupuser', component: TutupUserComponent },
  { path: 'maintencance/ctkpassbook', component: CetakPassbookComponent },
  { path: 'maintencance/hdrpassbook', component: HeaderPassbookComponent },
  { path: 'maintencance/ulangpassbook', component: UlangPassbookComponent },
  { path: 'maintencance/checktaspen', component: CheckTaspenComponent },
  { path: 'kartu/carikartuatm', component: CariKartuatmComponent },
  { path: 'pembayaran/bayarpkb', component: BayarPKBComponent  },
  { path: 'pembayaran/bayarmpn', component: BayarMPNComponent  },
  { path: 'pembayaran/billpayment', component: BillpaymentComponent  },
  { path: 'cashdrawer/denominasi', component: DenominasiComponent  },
  
>>>>>>> 8ac7ea12d09d7719f32726a6cb823cafe09c5ef7
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, PageNotFoundComponent, LoginFormComponent,
  DaftarUserSignOnComponent, WebBranchStatusComponent, TellerInSetoranTunaiComponent,
  TellerInPenarikanTunaiComponent, TellerInSelisihKasComponent, TellerInSinkronFinComponent,
  TellerInPindahBukuBedaUangComponent, TellerInTranPindahBukuComponent, TanggalbisnisComponent, AktifitasuserComponent,
<<<<<<< HEAD
  CariBaruUserComponent, GantiPasswordComponent, KontrolUserComponent, TutupUserComponent, CetakPassbookComponent,
  HeaderPassbookComponent, UlangPassbookComponent, CheckTaspenComponent, CariKartuatmComponent, BayarPKBComponent,
  BayarMPNComponent, BillpaymentComponent]
=======
  CariBaruUserComponent, GantiPasswordComponent, KontrolUserComponent, TutupUserComponent,CetakPassbookComponent,
  HeaderPassbookComponent,UlangPassbookComponent,CheckTaspenComponent,CariKartuatmComponent,BayarPKBComponent,
  BayarMPNComponent,BillpaymentComponent,DenominasiComponent]
>>>>>>> 8ac7ea12d09d7719f32726a6cb823cafe09c5ef7
