import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginGuard } from './guard/login.guard';
//layout
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
//nasabah
import { DaftarKodeNasabahComponent } from './nasabah/daftar-kode-nasabah/daftar-kode-nasabah.component';
import { PencarianDaftarHitamComponent } from './nasabah/pencarian-daftar-hitam/pencarian-daftar-hitam.component';
import { PencarianNasabahComponent } from './nasabah/pencarian-nasabah/pencarian-nasabah.component';
// nasabah // pencarian nasabah
import { PembuatanNasabahBaruComponent } from './nasabah/pencarian-nasabah/sub-pembuatan-nasabah/pembuatan-nasabah-baru/pembuatan-nasabah-baru.component';
import { DuplikatNasabahComponent } from './nasabah/pencarian-nasabah/sub-pembuatan-nasabah/pembuatan-nasabah-baru/komponen/duplikat-nasabah/duplikat-nasabah.component';
import { DuplikatNasabahIndvlComponent } from './nasabah/pencarian-nasabah/sub-pembuatan-nasabah/pembuatan-nasabah-baru/komponen/duplikat-nasabah-indvl/duplikat-nasabah-indvl.component';
import { BuatNasabahCorporateComponent } from './nasabah/pencarian-nasabah/sub-pembuatan-nasabah/pembuatan-nasabah-baru/komponen/buat-nasabah-corporate/buat-nasabah-corporate.component';
import { BuatNasabahIndividualComponent } from './nasabah/pencarian-nasabah/sub-pembuatan-nasabah/pembuatan-nasabah-baru/komponen/buat-nasabah-individual/buat-nasabah-individual.component';
import { PencarianNasabahIndividuComponent } from './nasabah/pencarian-nasabah/sub-pencarian-nasabah/pencarian-nasabah-individu/pencarian-nasabah-individu.component';
import { SubPencarianNasabahComponent } from './nasabah/pencarian-nasabah/sub-pencarian-nasabah/sub-pencarian-nasabah.component';

//routing alamat setiap komponen di aplikasi 
const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', component: DashboardComponent, },
      { path: 'dashboard', component: DashboardComponent, },
      //nasabah
      { path: 'nasabah/daftarnasabah', component: DaftarKodeNasabahComponent },
      { path: 'nasabah/carinasabah', component: PencarianNasabahComponent },
      { path: 'nasabah/buatnasabahbaru', component: PembuatanNasabahBaruComponent },
      { path: 'nasabah/duplikatnasabah', component: DuplikatNasabahComponent },
      { path: 'nasabah/duplikatnasabahindvl', component: DuplikatNasabahIndvlComponent },
      { path: 'nasabah/buatnasabahcorporate', component: BuatNasabahCorporateComponent },
      { path: 'nasabah/buatnasabahindividual', component: BuatNasabahIndividualComponent },
      // { path: 'nasabah/pencariannasabah/portofoliocif', component: PortofolioCifComponent },
      { path: 'nasabah/pencariandaftarhitam', component: PencarianDaftarHitamComponent },

      { path: 'nasabah/pencarian-nasabah/SubPencarianNasabah', component: SubPencarianNasabahComponent },
      { path: 'nasabah/pencarian-nasabah/PencarianNasabahIndividu', component: PencarianNasabahIndividuComponent },
    ]
  },
  {
    path: 'cashdrawerhead',
    component: HomeLayoutComponent,
    canActivate: [LoginGuard],
    loadChildren: './cashdrawer-head/cashdrawer-head.module#CashdrawerHeadModule',
  },
  {
    path: 'cashdrawer',
    component: HomeLayoutComponent, canActivate: [LoginGuard],
    loadChildren: './cashdrawer/cashdrawer.module#CashdrawerModule',
  },
  {
    path: 'administrative',
    component: HomeLayoutComponent, canActivate: [LoginGuard],
    loadChildren: './administrative/administrative.module#AdministrativeModule',
  },
  {
    path: 'kartu',
    component: HomeLayoutComponent, canActivate: [LoginGuard],
    loadChildren: './kartu/kartu.module#KartuModule',
  },
  {
    path: 'rekeningkoran',
    component: HomeLayoutComponent, canActivate: [LoginGuard],
    loadChildren: './rekening-koran/rekening-koran.module#RekeningKoranModule',
  },
  {
    path: 'rekening',
    component: HomeLayoutComponent, canActivate: [LoginGuard],
    loadChildren: './rekening/rekening.module#RekeningModule',
  },
  {
    path: 'report',
    component: HomeLayoutComponent,
    loadChildren: './report/report.module#ReportModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'otorisasihead',
    component: HomeLayoutComponent,
    loadChildren: './otorisasihead/otorisasihead.module#OtorisasiheadModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'pembayaran',
    component: HomeLayoutComponent,
    loadChildren: './pembayaran/pembayaran.module#PembayaranModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'passbook',
    component: HomeLayoutComponent,
    loadChildren: './passbook/passbook.module#PassbookModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'tellerin',
    component: HomeLayoutComponent,
    loadChildren: './teller-in/teller-in.module#TellerInModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'usermaintenance',
    component: HomeLayoutComponent,
    loadChildren: './usermaintenance/usermaintenance.module#UsermaintenanceModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'test',
    component: HomeLayoutComponent,
    loadChildren: './test/test.module#TestModule',
    canActivate: [LoginGuard]
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
  DaftarKodeNasabahComponent, PencarianNasabahComponent, DaftarKodeNasabahComponent, PembuatanNasabahBaruComponent,
  DuplikatNasabahComponent, DuplikatNasabahIndvlComponent, BuatNasabahCorporateComponent, BuatNasabahIndividualComponent,
  PencarianDaftarHitamComponent, PencarianNasabahIndividuComponent, SubPencarianNasabahComponent
]