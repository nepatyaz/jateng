import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CariKartuatmComponent } from './cari-kartuatm/cari-kartuatm.component';


const routes: Routes = [
  {
     path: '', component: CariKartuatmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KartuRoutingModule { }
