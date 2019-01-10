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
    CetakrekeningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [AuthService, KtrluserService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }