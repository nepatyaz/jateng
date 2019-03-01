import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginGuard } from './guard/login.guard';
//administrative
import { DaftarUserSignOnComponent } from './administrative/daftar-user-sign-on/daftar-user-sign-on.component';
import { WebBranchStatusComponent } from './administrative/web-branch-status/web-branch-status.component';
import { UploadTransaksiComponent } from './administrative/upload-transaksi/upload-transaksi.component';
import { ChangeOfflineLimitComponent } from './administrative/change-offline-limit/change-offline-limit.component';
import { TanggalbisnisComponent } from './administrative/tanggalbisnis/tanggalbisnis.component';
import { AktifitasuserComponent } from './administrative/aktifitasuser/aktifitasuser.component';
//tellerin
import { TellerInSetoranTunaiComponent } from './teller-in/teller-in-setoran-tunai/teller-in-setoran-tunai.component';
import { TellerInPenarikanTunaiComponent } from './teller-in/teller-in-penarikan-tunai/teller-in-penarikan-tunai.component';
import { TellerInSelisihKasComponent } from './teller-in/teller-in-selisih-kas/teller-in-selisih-kas.component';
import { TellerInSinkronFinComponent } from './teller-in/teller-in-sinkron-fin/teller-in-sinkron-fin.component';
import { TellerInPindahBukuBedaUangComponent } from './teller-in/teller-in-pindah-buku-beda-uang/teller-in-pindah-buku-beda-uang.component';
import { TellerInTranPindahBukuComponent } from './teller-in/teller-in-tran-pindah-buku/teller-in-tran-pindah-buku.component';
import { TellerInComponent } from './teller-in/teller-in/teller-in.component';
//user maintenance
import { RoleComponent } from './usermaintenance/role/role.component';
import { CariBaruUserComponent } from './usermaintenance/cari-baru-user/cari-baru-user.component';
import { GantiPasswordComponent } from './usermaintenance/ganti-password/ganti-password.component';
import { KontrolUserComponent } from './usermaintenance/kontrol-user/kontrol-user.component';
import { TutupUserComponent } from './usermaintenance/tutup-user/tutup-user.component';
import { RefreshUserComponent } from './usermaintenance/refresh-user/refresh-user.component';
//passbook
import { CetakPassbookComponent } from './passbook/cetak-passbook/cetak-passbook.component';
import { HeaderPassbookComponent } from './passbook/header-passbook/header-passbook.component';
import { UlangPassbookComponent } from './passbook/ulang-passbook/ulang-passbook.component';
import { CheckTaspenComponent } from './passbook/check-taspen/check-taspen.component';
//kartu
import { CariKartuatmComponent } from './kartu/cari-kartuatm/cari-kartuatm.component';
import { AktivasiAtmComponent } from './kartu/aktivasi-atm/aktivasi-atm.component';
import { TabskartuComponent } from './kartu/tabskartu/tabskartu.component';
//pembayaran
import { BayarPKBComponent } from './pembayaran/bayar-pkb/bayar-pkb.component';
import { BayarMPNComponent } from './pembayaran/bayar-mpn/bayar-mpn.component';
import { BillpaymentComponent } from './pembayaran/billpayment/billpayment.component';
import { CashdrawerHeadTellerComponent } from './cashdrawer/cashdrawer-head-teller/cashdrawer-head-teller.component';
//cashdrawer
import { DenominasiComponent } from './cashdrawer/denominasi/denominasi.component';
import { BalancingComponent } from './cashdrawer/balancing/balancing.component';
import { SinkronisasiComponent } from './cashdrawer/sinkronisasi/sinkronisasi.component';
//layout
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
//rekening
import { CetakrekeningComponent } from './rekening-koran/cetakrekening/cetakrekening.component';
import { DaftarrekeningComponent } from './rekening-koran/daftarrekening/daftarrekening.component';
import { PencarianDaftarRekeningComponent } from './rekening/pencarian-daftar-rekening/pencarian-daftar-rekening.component';
import { BarsheetRekeningComponent } from './rekening/barsheet-rekening/barsheet-rekening.component';
//report
import { ReportCetakRekeningComponent } from './report/cetak-rekening/cetak-rekening.component';
import { GantiPasswordOverrideComponent } from './usermaintenance/ganti-password-override/ganti-password-override.component';
//nasabah
import { DaftarKodeNasabahComponent } from './nasabah/daftar-kode-nasabah/daftar-kode-nasabah.component';
import { PencarianNasabahComponent } from './nasabah/pencarian-nasabah/pencarian-nasabah.component';
import { PortofolioCifComponent } from './nasabah/pencarian-nasabah/portofolio-cif/portofolio-cif.component';
import { PembuatanNasabahBaruComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/pembuatan-nasabah-baru.component';
import { DuplikatNasabahComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/komponen/duplikat-nasabah/duplikat-nasabah.component';
import { DuplikatNasabahIndvlComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/komponen/duplikat-nasabah-indvl/duplikat-nasabah-indvl.component';
import { BuatNasabahCorporateComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/komponen/buat-nasabah-corporate/buat-nasabah-corporate.component';
import { BuatNasabahIndividualComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/komponen/buat-nasabah-individual/buat-nasabah-individual.component';
import { PencarianDaftarHitamComponent } from './nasabah/pencarian-daftar-hitam/pencarian-daftar-hitam.component';
//otorisasi head
import { OtorisasiRekeningKonfidensialComponent } from './otorisasihead/otorisasi-rekening-konfidensial/otorisasi-rekening-konfidensial.component';
import { OtorisasiCifComponent } from './otorisasihead/otorisasi-cif/otorisasi-cif.component';
import { OtorisasiRekeningComponent } from './otorisasihead/otorisasi-rekening/otorisasi-rekening.component';
//test komponen
import { PaginationComponent } from './test/pagination/pagination.component';
import { Pagination2Component } from './test/pagination2/pagination2.component';
import { WebcamComponent } from './test/webcam/webcam.component';


//routing alamat setiap komponen di aplikasi 
const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', component: DashboardComponent, },
      { path: 'dashboard', component: DashboardComponent, },
      { path: 'daftaruser', component: DaftarUserSignOnComponent },
      //administrasi path
      { path: 'administrator/daftaruser', component: DaftarUserSignOnComponent },
      { path: 'administrator/webbranchstatus', component: WebBranchStatusComponent },
      { path: 'administrator/tglbisnis', component: TanggalbisnisComponent },
      { path: 'administrator/aktifitasuser', component: AktifitasuserComponent },
      { path: 'administrator/upload', component: UploadTransaksiComponent },
      { path: 'administrator/offlinelimit', component: ChangeOfflineLimitComponent },
      //tellerin
      { path: 'tellerin/setorantunai', component: TellerInSetoranTunaiComponent },
      { path: 'tellerin/tellerin', component: TellerInComponent },
      { path: 'tellerin/penarikantunai', component: TellerInPenarikanTunaiComponent },
      { path: 'tellerin/selisihkas', component: TellerInSelisihKasComponent },
      { path: 'tellerin/sinkronfin', component: TellerInSinkronFinComponent },
      { path: 'tellerin/pinbukbedauang', component: TellerInPindahBukuBedaUangComponent },
      { path: 'tellerin/pindahbuku', component: TellerInTranPindahBukuComponent },
      //maintenance
      { path: 'maintenance/caribaruuser', component: CariBaruUserComponent },
      { path: 'maintenance/gantisandi', component: GantiPasswordComponent },
      { path: 'maintenance/kontroluser', component: KontrolUserComponent },
      { path: 'maintenance/tutupuser', component: TutupUserComponent },
      { path: 'maintenance/gantisandioveride', component: GantiPasswordOverrideComponent },
      { path: 'maintenance/role', component: RoleComponent },
      { path: 'maintenance/refresh', component: RefreshUserComponent },
      //passbook
      { path: 'passbook/ctkpassbook', component: CetakPassbookComponent },
      { path: 'passbook/hdrpassbook', component: HeaderPassbookComponent },
      { path: 'passbook/ulangpassbook', component: UlangPassbookComponent },
      { path: 'passbook/checktaspen', component: CheckTaspenComponent },
      //kartu
      { path: 'kartu/carikartuatm', component: CariKartuatmComponent },
      { path: 'kartu/aktivasi', component: AktivasiAtmComponent },
      { path: 'kartu/tabskartu', component: TabskartuComponent },
      //pembayaran
      { path: 'pembayaran/bayarpkb', component: BayarPKBComponent },
      { path: 'pembayaran/bayarmpn', component: BayarMPNComponent },
      { path: 'pembayaran/billpayment', component: BillpaymentComponent },
      //cashdrawer
      { path: 'cashdrawer/denominasi', component: DenominasiComponent },
      { path: 'cashdrawer/balancing', component: BalancingComponent },
      { path: 'cashdrawer/sinkronisasi', component: SinkronisasiComponent },
      //rekening
      { path: 'rekening/cetak', component: CetakrekeningComponent },
      { path: 'rekening/daftar', component: DaftarrekeningComponent },
      { path: 'rekening/pencariandaftarrekening', component: PencarianDaftarRekeningComponent },
      //cashdrawer head
      { path: 'cashdrawerhead/daftarsaldo', component: CashdrawerHeadTellerComponent },
      { path: 'cashdrawerhead/daftarsaldo', component: CashdrawerHeadTellerComponent },
      //report
      { path: 'report/cetakrekening', component: ReportCetakRekeningComponent },
      //nasabah
      { path: 'nasabah/daftarnasabah', component: DaftarKodeNasabahComponent },
      { path: 'nasabah/carinasabah', component: PencarianNasabahComponent },
      { path: 'nasabah/buatnasabahbaru', component: PembuatanNasabahBaruComponent },
      { path: 'nasabah/duplikatnasabah', component: DuplikatNasabahComponent },
      { path: 'nasabah/duplikatnasabahindvl', component: DuplikatNasabahIndvlComponent },
      { path: 'nasabah/buatnasabahcorporate', component: BuatNasabahCorporateComponent },
      { path: 'nasabah/buatnasabahindividual', component: BuatNasabahIndividualComponent },
      { path: 'nasabah/pencariannasabah/portofoliocif', component: PortofolioCifComponent },
      { path: 'nasabah/pencariandaftarhitam', component: PencarianDaftarHitamComponent },
      //otorisasi head
      { path: 'otorisasihead/otorisasicif', component: OtorisasiCifComponent },
      { path: 'otorisasihead/otorisasirekening', component: OtorisasiRekeningComponent },
      { path: 'otorisasihead/otorisasirekeningkonfidensial', component: OtorisasiRekeningKonfidensialComponent },
      //testing
      { path: 'test/camera', component: WebcamComponent },
      { path: 'test/pagination', component: PaginationComponent },
      { path: 'test/pagination2', component: Pagination2Component },
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
export const routingComponents = [
  DashboardComponent, PageNotFoundComponent, LoginFormComponent,
  DaftarUserSignOnComponent, WebBranchStatusComponent, TellerInComponent,
  TellerInSetoranTunaiComponent, TellerInPenarikanTunaiComponent, TellerInSelisihKasComponent,
  TellerInSinkronFinComponent, TellerInPindahBukuBedaUangComponent, TellerInTranPindahBukuComponent,
  TanggalbisnisComponent, AktifitasuserComponent, DenominasiComponent, BalancingComponent,
  SinkronisasiComponent, CetakrekeningComponent, DaftarrekeningComponent, UploadTransaksiComponent,
  ChangeOfflineLimitComponent, CashdrawerHeadTellerComponent, ReportCetakRekeningComponent,
  GantiPasswordOverrideComponent, RoleComponent, DaftarKodeNasabahComponent, PencarianNasabahComponent,
  AktivasiAtmComponent, DenominasiComponent, BalancingComponent, SinkronisasiComponent,
  CetakrekeningComponent, DaftarrekeningComponent, UploadTransaksiComponent, ChangeOfflineLimitComponent,
  CashdrawerHeadTellerComponent, ReportCetakRekeningComponent, GantiPasswordOverrideComponent,
  RoleComponent, DaftarKodeNasabahComponent, PencarianNasabahComponent, PembuatanNasabahBaruComponent,
  DuplikatNasabahComponent, DuplikatNasabahIndvlComponent, BuatNasabahCorporateComponent, BuatNasabahIndividualComponent,
  TabskartuComponent, WebcamComponent, OtorisasiCifComponent, OtorisasiRekeningComponent, 
  OtorisasiRekeningKonfidensialComponent,PencarianDaftarRekeningComponent, BarsheetRekeningComponent, 
  PaginationComponent, Pagination2Component, PortofolioCifComponent,PencarianDaftarHitamComponent
]
