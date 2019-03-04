import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KartuRoutingModule } from './kartu-routing.module';
import { CariKartuatmComponent } from './cari-kartuatm/cari-kartuatm.component';
import { AktivasiAtmComponent } from './aktivasi-atm/aktivasi-atm.component';
import { TabskartuComponent } from './tabskartu/tabskartu.component';
import { AktivasiComponent } from './tabskartu/komponen/aktivasi/aktivasi.component';
import { BlokirComponent } from './tabskartu/komponen/blokir/blokir.component';
import { RelasiKartuComponent } from './tabskartu/komponen/relasi-kartu/relasi-kartu.component';
import { BukaBlokirComponent } from './tabskartu/komponen/buka-blokir/buka-blokir.component';




@NgModule({
  imports: [
    CommonModule,
    KartuRoutingModule
  ],
  declarations: [
    AktivasiComponent,
    TabskartuComponent,
    AktivasiAtmComponent,
    CariKartuatmComponent,
    BlokirComponent,
    RelasiKartuComponent,
    BukaBlokirComponent,
    TabskartuComponent
  ]
})
export class KartuModule { }
