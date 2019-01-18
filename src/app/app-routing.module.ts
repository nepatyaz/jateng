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
import { ViewKontrolUserComponent } from './usermaintenance/kontrol-user/view/view-kontrol-user/view-kontrol-user.component';
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
import { BalancingComponent } from './cashdrawer/balancing/balancing.component';
import { LoginGuard } from './guard/login.guard';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { SinkronisasiComponent } from './cashdrawer/sinkronisasi/sinkronisasi.component';
import { CetakrekeningComponent } from './rekening-koran/cetakrekening/cetakrekening.component';
import { DaftarrekeningComponent } from './rekening-koran/daftarrekening/daftarrekening.component';
import { UploadTransaksiComponent } from './administrative/upload-transaksi/upload-transaksi.component';
import { ChangeOfflineLimitComponent } from './administrative/change-offline-limit/change-offline-limit.component';
import { CashdrawerHeadTellerComponent } from './cashdrawer/cashdrawer-head-teller/cashdrawer-head-teller.component';
import { ReportCetakRekeningComponent } from './report/cetak-rekening/cetak-rekening.component';
import { GantiPasswordOverrideComponent } from './usermaintenance/ganti-password-override/ganti-password-override.component';
import { TellerInComponent } from './teller-in/teller-in/teller-in.component';
import { RoleComponent } from './usermaintenance/role/role.component';
import { RefreshUserComponent } from './usermaintenance/refresh-user/refresh-user.component';
import { DaftarKodeNasabahComponent } from './nasabah/daftar-kode-nasabah/daftar-kode-nasabah.component';
import { PencarianNasabahComponent } from './nasabah/pencarian-nasabah/pencarian-nasabah.component';
import { PembuatanNasabahBaruComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/pembuatan-nasabah-baru.component';
import { DuplikatNasabahComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/komponen/duplikat-nasabah/duplikat-nasabah.component';
import { DuplikatNasabahIndvlComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/komponen/duplikat-nasabah-indvl/duplikat-nasabah-indvl.component';
import { BuatNasabahCorporateComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/komponen/buat-nasabah-corporate/buat-nasabah-corporate.component';
import { BuatNasabahIndividualComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/komponen/buat-nasabah-individual/buat-nasabah-individual.component';

//routing alamat setiap komponen di aplikasi 
const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', component: DashboardComponent, },
      { path: 'dashboard', component: DashboardComponent, },
      { path: 'daftaruser', component: DaftarUserSignOnComponent },
      { path: 'administrator/daftaruser', component: DaftarUserSignOnComponent },
      { path: 'administrator/webbranchstatus', component: WebBranchStatusComponent },
      { path: 'administrator/tglbisnis', component: TanggalbisnisComponent },
      { path: 'administrator/aktifitasuser', component: AktifitasuserComponent },
      { path: 'administrator/upload', component: UploadTransaksiComponent },
      { path: 'administrator/offlinelimit', component: ChangeOfflineLimitComponent },
      { path: 'tellerin/setorantunai', component: TellerInSetoranTunaiComponent },
      { path: 'tellerin/tellerin', component: TellerInComponent },
      { path: 'tellerin/penarikantunai', component: TellerInPenarikanTunaiComponent },
      { path: 'tellerin/selisihkas', component: TellerInSelisihKasComponent },
      { path: 'tellerin/sinkronfin', component: TellerInSinkronFinComponent },
      { path: 'tellerin/pinbukbedauang', component: TellerInPindahBukuBedaUangComponent },
      { path: 'tellerin/pindahbuku', component: TellerInTranPindahBukuComponent },
      { path: 'maintenance/caribaruuser', component: CariBaruUserComponent },
      { path: 'maintenance/gantisandi', component: GantiPasswordComponent },
      { path: 'maintenance/kontroluser', component: KontrolUserComponent },
      { path: 'maintenance/viewkontroluser', component: ViewKontrolUserComponent },
      { path: 'maintenance/tutupuser', component: TutupUserComponent },
      { path: 'maintenance/gantisandioveride', component: GantiPasswordOverrideComponent },
      { path: 'maintenance/role', component: RoleComponent },
      { path: 'maintenance/refresh', component: RefreshUserComponent },
      { path: 'passbook/ctkpassbook', component: CetakPassbookComponent },
      { path: 'passbook/hdrpassbook', component: HeaderPassbookComponent },
      { path: 'passbook/ulangpassbook', component: UlangPassbookComponent },
      { path: 'passbook/checktaspen', component: CheckTaspenComponent },
      { path: 'kartu/carikartuatm', component: CariKartuatmComponent },
      { path: 'pembayaran/bayarpkb', component: BayarPKBComponent },
      { path: 'pembayaran/bayarmpn', component: BayarMPNComponent },
      { path: 'pembayaran/billpayment', component: BillpaymentComponent },
      { path: 'cashdrawer/denominasi', component: DenominasiComponent },
      { path: 'cashdrawer/balancing', component: BalancingComponent },
      { path: 'cashdrawer/sinkronisasi', component: SinkronisasiComponent },
      { path: 'rekening/cetak', component: CetakrekeningComponent },
      { path: 'rekening/daftar', component: DaftarrekeningComponent },
      { path: 'cashdrawerhead/daftarsaldo', component: CashdrawerHeadTellerComponent },
      { path: 'cashdrawerhead/daftarsaldo', component: CashdrawerHeadTellerComponent },
      { path: 'report/cetakrekening', component: ReportCetakRekeningComponent },
      { path: 'nasabah/daftarnasabah', component: DaftarKodeNasabahComponent },
      { path: 'nasabah/carinasabah', component: PencarianNasabahComponent },
      { path: 'nasabah/buatnasabahbaru', component: PembuatanNasabahBaruComponent },
      { path: 'nasabah/duplikatnasabah', component: DuplikatNasabahComponent },
      { path: 'nasabah/duplikatnasabahindvl', component: DuplikatNasabahIndvlComponent },
      { path: 'nasabah/buatnasabahcorporate', component: BuatNasabahCorporateComponent },
      { path: 'nasabah/buatnasabahindividual', component: BuatNasabahIndividualComponent },
    ]
  },
  {
    path: '', component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginFormComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, PageNotFoundComponent, LoginFormComponent,
  DaftarUserSignOnComponent, WebBranchStatusComponent, TellerInComponent, TellerInSetoranTunaiComponent,
  TellerInPenarikanTunaiComponent, TellerInSelisihKasComponent, TellerInSinkronFinComponent,
  TellerInPindahBukuBedaUangComponent, TellerInTranPindahBukuComponent, TanggalbisnisComponent, AktifitasuserComponent,
  DenominasiComponent, BalancingComponent, SinkronisasiComponent, CetakrekeningComponent, DaftarrekeningComponent,
  UploadTransaksiComponent, ChangeOfflineLimitComponent, CashdrawerHeadTellerComponent, ReportCetakRekeningComponent,
  GantiPasswordOverrideComponent, RoleComponent, DaftarKodeNasabahComponent,PencarianNasabahComponent,
  PembuatanNasabahBaruComponent,DuplikatNasabahComponent, DuplikatNasabahIndvlComponent, BuatNasabahCorporateComponent, 
  BuatNasabahIndividualComponent,ViewKontrolUserComponent]
