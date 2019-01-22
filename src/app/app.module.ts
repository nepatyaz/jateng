import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderHomeComponent } from './header/header-home/header-home.component';
import { NavigationComponent } from './button/navigation/navigation.component';
import { HomeNavComponent } from './navigation/home-nav/home-nav.component';
import { DaftarUserSignOnComponent } from './administrative/daftar-user-sign-on/daftar-user-sign-on.component';
import { WebBranchStatusComponent } from './administrative/web-branch-status/web-branch-status.component';
import { TanggalbisnisComponent } from './administrative/tanggalbisnis/tanggalbisnis.component';
import { AktifitasuserComponent } from './administrative/aktifitasuser/aktifitasuser.component';
import { TellerInSetoranTunaiComponent } from './teller-in/teller-in-setoran-tunai/teller-in-setoran-tunai.component';
import { TellerInPenarikanTunaiComponent } from './teller-in/teller-in-penarikan-tunai/teller-in-penarikan-tunai.component';
import { TellerInSelisihKasComponent } from './teller-in/teller-in-selisih-kas/teller-in-selisih-kas.component';
import { TellerInSinkronFinComponent } from './teller-in/teller-in-sinkron-fin/teller-in-sinkron-fin.component';
import { TellerInPindahBukuBedaUangComponent } from './teller-in/teller-in-pindah-buku-beda-uang/teller-in-pindah-buku-beda-uang.component';
import { TellerInTranPindahBukuComponent } from './teller-in/teller-in-tran-pindah-buku/teller-in-tran-pindah-buku.component';
import { AuthService } from './auth.service';
import { CariBaruUserComponent } from './usermaintenance/cari-baru-user/cari-baru-user.component';
import { GantiPasswordComponent } from './usermaintenance/ganti-password/ganti-password.component';
import { KontrolUserComponent } from './usermaintenance/kontrol-user/kontrol-user.component';
import { TutupUserComponent } from './usermaintenance/tutup-user/tutup-user.component';
import { FooterHomeComponent } from './footer/footer-home/footer-home.component';
import { KtrluserService } from './ktrluser.service';
import { ViewuserService } from './viewuser.service';
import { LoginGuard } from './guard/login.guard';
import { CetakPassbookComponent } from './passbook/cetak-passbook/cetak-passbook.component';
import { HeaderPassbookComponent } from './passbook/header-passbook/header-passbook.component';
import { UlangPassbookComponent } from './passbook/ulang-passbook/ulang-passbook.component';
import { CheckTaspenComponent } from './passbook/check-taspen/check-taspen.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { CariKartuatmComponent } from './kartu/cari-kartuatm/cari-kartuatm.component';
import { BayarPKBComponent } from './pembayaran/bayar-pkb/bayar-pkb.component';
import { BayarMPNComponent } from './pembayaran/bayar-mpn/bayar-mpn.component';
import { BillpaymentComponent } from './pembayaran/billpayment/billpayment.component';
import { DenominasiComponent } from './cashdrawer/denominasi/denominasi.component';
import { BalancingComponent } from './cashdrawer/balancing/balancing.component';
import { SinkronisasiComponent } from './cashdrawer/sinkronisasi/sinkronisasi.component';
import { CetakrekeningComponent } from './rekening-koran/cetakrekening/cetakrekening.component';
import { MaterialModule } from './material';
import { DaftarrekeningComponent } from './rekening-koran/daftarrekening/daftarrekening.component';
import { UploadTransaksiComponent } from './administrative/upload-transaksi/upload-transaksi.component';
import { ChangeOfflineLimitComponent } from './administrative/change-offline-limit/change-offline-limit.component';
import { CashdrawerHeadTellerComponent } from './cashdrawer/cashdrawer-head-teller/cashdrawer-head-teller.component';
import { ReportCetakRekeningComponent } from './report/cetak-rekening/cetak-rekening.component';
import { GantiPasswordOverrideComponent } from './usermaintenance/ganti-password-override/ganti-password-override.component';
import { RoleComponent } from './usermaintenance/role/role.component';
import { TellerInComponent } from './teller-in/teller-in/teller-in.component';
import { RefreshUserComponent } from './usermaintenance/refresh-user/refresh-user.component';
import { DaftarKodeNasabahComponent } from './nasabah/daftar-kode-nasabah/daftar-kode-nasabah.component';
import { PencarianNasabahComponent } from './nasabah/pencarian-nasabah/pencarian-nasabah.component';
import { DataUmumNasabahComponent } from './nasabah/pencarian-nasabah/komponen/data-umum-nasabah/data-umum-nasabah.component';
import { EditDataUmumNasabahComponent } from './nasabah/pencarian-nasabah/komponen/edit-data-umum-nasabah/edit-data-umum-nasabah.component';
import { DataPersonalComponent } from './nasabah/pencarian-nasabah/komponen/data-personal/data-personal.component';
import { UbahDataPersonalComponent } from './nasabah/pencarian-nasabah/komponen/ubah-data-personal/ubah-data-personal.component';
import { TransaksiLimitComponent } from './nasabah/pencarian-nasabah/komponen/transaksi-limit/transaksi-limit.component';
import { UbahTransaksiLimitComponent } from './nasabah/pencarian-nasabah/komponen/ubah-transaksi-limit/ubah-transaksi-limit.component';
import { SandiBiComponent } from './nasabah/pencarian-nasabah/komponen/sandi-bi/sandi-bi.component';
import { UbahSandiBiComponent } from './nasabah/pencarian-nasabah/komponen/ubah-sandi-bi/ubah-sandi-bi.component';
import { DataTambahanComponent } from './nasabah/pencarian-nasabah/komponen/data-tambahan/data-tambahan.component';
import { UbahDataTambahanComponent } from './nasabah/pencarian-nasabah/komponen/ubah-data-tambahan/ubah-data-tambahan.component';
<<<<<<< HEAD
import { AktivasiAtmComponent } from './kartu/cari-kartuatm/aktivasi-atm/aktivasi-atm.component';
=======
import { PortofolioCifComponent } from './nasabah/pencarian-nasabah/portofolio-cif/portofolio-cif.component';
import { DataAdministrasiComponent } from './nasabah/pencarian-nasabah/portofolio-cif/tabungan/komponen/data-administrasi/data-administrasi.component';
import { DataSukuBungaComponent } from './nasabah/pencarian-nasabah/portofolio-cif/tabungan/komponen/data-suku-bunga/data-suku-bunga.component';
import { SaldoRekeningComponent } from './nasabah/pencarian-nasabah/portofolio-cif/tabungan/komponen/saldo-rekening/saldo-rekening.component';
import { MutasiComponent } from './nasabah/pencarian-nasabah/portofolio-cif/tabungan/komponen/mutasi/mutasi.component';
import { PembuatanNasabahBaruComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/pembuatan-nasabah-baru.component';
import { DuplikatNasabahComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/komponen/duplikat-nasabah/duplikat-nasabah.component';
import { BungaJasaGiroComponent } from './nasabah/pencarian-nasabah/portofolio-cif/tabungan/komponen/bunga-jasa-giro/bunga-jasa-giro.component';
import { DuplikatNasabahIndvlComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/komponen/duplikat-nasabah-indvl/duplikat-nasabah-indvl.component';
import { BuatNasabahCorporateComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/komponen/buat-nasabah-corporate/buat-nasabah-corporate.component';
import { RiwayatSaldoComponent } from './nasabah/pencarian-nasabah/portofolio-cif/tabungan/komponen/riwayat-saldo/riwayat-saldo.component';
import { GiroComponent } from './nasabah/pencarian-nasabah/portofolio-cif/giro/giro.component';
import { BuatNasabahIndividualComponent } from './nasabah/pencarian-nasabah/pembuatan-nasabah-baru/komponen/buat-nasabah-individual/buat-nasabah-individual.component';
>>>>>>> fe5089023fdfb4a9f510bd391d2ab8bdd2c1cacd



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    FooterComponent,
    routingComponents,
    PageNotFoundComponent,
    HeaderComponent,
    HeaderHomeComponent,
    NavigationComponent,
    HomeNavComponent,
    DaftarUserSignOnComponent,
    WebBranchStatusComponent,
    TellerInSetoranTunaiComponent,
    TellerInPenarikanTunaiComponent,
    TellerInSelisihKasComponent,
    TellerInSinkronFinComponent,
    TellerInPindahBukuBedaUangComponent,
    TellerInTranPindahBukuComponent,
    TanggalbisnisComponent,
    AktifitasuserComponent,
    CariBaruUserComponent,
    GantiPasswordComponent,
    KontrolUserComponent,
    TutupUserComponent,
    FooterHomeComponent,
    CetakPassbookComponent,
    HeaderPassbookComponent,
    UlangPassbookComponent,
    CheckTaspenComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    CariKartuatmComponent,
    BayarPKBComponent,
    BayarMPNComponent,
    BillpaymentComponent,
    DenominasiComponent,
    BalancingComponent,
    SinkronisasiComponent,
    CetakrekeningComponent,
    DaftarrekeningComponent,
    UploadTransaksiComponent,
    ChangeOfflineLimitComponent,
    CashdrawerHeadTellerComponent,
    ReportCetakRekeningComponent,
    GantiPasswordOverrideComponent,
    RoleComponent,
    TellerInComponent,
    RefreshUserComponent,
    DaftarKodeNasabahComponent,
    PencarianNasabahComponent,
    DataUmumNasabahComponent,
    EditDataUmumNasabahComponent,
    DataPersonalComponent,
    UbahDataPersonalComponent,
    TransaksiLimitComponent,
    UbahTransaksiLimitComponent,
    SandiBiComponent,
    UbahSandiBiComponent,
    DataTambahanComponent,
    UbahDataTambahanComponent,
<<<<<<< HEAD
    AktivasiAtmComponent
=======
    PortofolioCifComponent,
    DataAdministrasiComponent,
    DataSukuBungaComponent,
    SaldoRekeningComponent,
    MutasiComponent,
    PembuatanNasabahBaruComponent,
    DuplikatNasabahComponent,
    BungaJasaGiroComponent,
    DuplikatNasabahIndvlComponent,
    BuatNasabahCorporateComponent,
    RiwayatSaldoComponent,
    BuatNasabahIndividualComponent,
    GiroComponent,
    BuatNasabahIndividualComponent
>>>>>>> fe5089023fdfb4a9f510bd391d2ab8bdd2c1cacd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule
  ],
  providers: [AuthService, KtrluserService, ViewuserService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }