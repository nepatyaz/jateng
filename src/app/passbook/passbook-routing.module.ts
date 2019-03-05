import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CetakPassbookComponent } from './cetak-passbook/cetak-passbook.component';
import { HeaderPassbookComponent } from './header-passbook/header-passbook.component';
import { UlangPassbookComponent } from './ulang-passbook/ulang-passbook.component';
import { CheckTaspenComponent } from './check-taspen/check-taspen.component';

const routes: Routes = [
  { path: '', component: CetakPassbookComponent },
  { path: 'headerpassbook', component: HeaderPassbookComponent },
  { path: 'ulangpassbook', component: UlangPassbookComponent },
  { path: 'checktaspen', component: CheckTaspenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassbookRoutingModule { }
