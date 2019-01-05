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




const routes: Routes = [

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
  {path : '**', component : PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, PageNotFoundComponent, LoginFormComponent,
  DaftarUserSignOnComponent, WebBranchStatusComponent, TellerInSetoranTunaiComponent, 
  TellerInPenarikanTunaiComponent, TellerInSelisihKasComponent, TellerInSinkronFinComponent, 
  TellerInPindahBukuBedaUangComponent, TellerInTranPindahBukuComponent]