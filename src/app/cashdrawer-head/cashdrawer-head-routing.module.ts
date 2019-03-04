import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashdrawerHeadComponent } from '../cashdrawer-head/cashdrawer-head.component';

const routes: Routes = [
  { path: '', component: CashdrawerHeadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashdrawerHeadRoutingModule { }
