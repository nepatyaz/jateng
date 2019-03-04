import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DenominasiComponent } from './denominasi/denominasi.component';
import { BalancingComponent } from './balancing/balancing.component';
import { SinkronisasiComponent } from './sinkronisasi/sinkronisasi.component';

const routes: Routes = [
  { path: '', component: DenominasiComponent  },
  { path: 'denominasi', component: DenominasiComponent  },
  { path: 'balancing', component: BalancingComponent  },
  { path: 'sinkronisasi', component: SinkronisasiComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashdrawerRoutingModule { }
