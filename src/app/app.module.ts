import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginGuard } from './guard/login.guard';
//layout component
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { HeaderHomeComponent } from './header/header-home/header-home.component';
import { NavigationComponent } from './button/navigation/navigation.component';
import { HomeNavComponent } from './navigation/home-nav/home-nav.component';
import { FooterHomeComponent } from './footer/footer-home/footer-home.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
//nasabah
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
import { PencarianDaftarHitamComponent } from './nasabah/pencarian-daftar-hitam/pencarian-daftar-hitam.component';
import { TabunganComponent } from './nasabah/pencarian-nasabah/portofolio-cif/tabungan/tabungan.component';
import { DataAdministrasiGiroComponent } from './nasabah/pencarian-nasabah/portofolio-cif/giro/komponen/data-administrasi-giro/data-administrasi-giro.component';
import { DataSukuBungaGiroComponent } from './nasabah/pencarian-nasabah/portofolio-cif/giro/komponen/data-suku-bunga-giro/data-suku-bunga-giro.component';
import { SaldoRekeningGiroComponent } from './nasabah/pencarian-nasabah/portofolio-cif/giro/komponen/saldo-rekening-giro/saldo-rekening-giro.component';
import { MutasiGiroComponent } from './nasabah/pencarian-nasabah/portofolio-cif/giro/komponen/mutasi-giro/mutasi-giro.component';
import { BungaJasaGiroGiroComponent } from './nasabah/pencarian-nasabah/portofolio-cif/giro/komponen/bunga-jasa-giro-giro/bunga-jasa-giro-giro.component';
import { BungaPrkGiroComponent } from './nasabah/pencarian-nasabah/portofolio-cif/giro/komponen/bunga-prk-giro/bunga-prk-giro.component';
import { BungaCerukanGiroComponent } from './nasabah/pencarian-nasabah/portofolio-cif/giro/komponen/bunga-cerukan-giro/bunga-cerukan-giro.component';

//3rd party library module
import { WebcamModule } from 'ngx-webcam';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from './material';
import { CurrencyFormatDirective } from 'ng-currency-format';
//service 
import { KtrluserService } from './ktrluser.service';
import { ViewuserService } from './viewuser.service';
import { AuthService } from './auth.service';
import { TableService } from './service/table.service';
import { InformasiCifComponent } from './nasabah/pencarian-nasabah/informasi-cif/informasi-cif.component';

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
    FooterHomeComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
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
    BuatNasabahIndividualComponent,
    CurrencyFormatDirective,
    PencarianDaftarHitamComponent,
    TabunganComponent,
    DataAdministrasiGiroComponent,
    DataSukuBungaGiroComponent,
    SaldoRekeningGiroComponent,
    MutasiGiroComponent,
    BungaJasaGiroGiroComponent,
    BungaPrkGiroComponent,
    BungaCerukanGiroComponent,
    InformasiCifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule,
    WebcamModule,
  ],
  providers: [AuthService, KtrluserService, ViewuserService, TableService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }