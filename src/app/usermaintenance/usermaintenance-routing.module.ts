import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CariBaruUserComponent } from './cari-baru-user/cari-baru-user.component';
import { GantiPasswordComponent } from './ganti-password/ganti-password.component';
import { TutupUserComponent } from './tutup-user/tutup-user.component';
import { GantiPasswordOverrideComponent } from './ganti-password-override/ganti-password-override.component';
import { RoleComponent } from './role/role.component';
import { RefreshUserComponent } from './refresh-user/refresh-user.component';
import { KontrolUserComponent } from './kontrol-user/kontrol-user.component';

const routes: Routes = [
  { path: '', component: CariBaruUserComponent },
  { path: 'gantisandi', component: GantiPasswordComponent },
  { path: 'tutupuser', component: TutupUserComponent },
  { path: 'gantisandioveride', component: GantiPasswordOverrideComponent },
  { path: 'role', component: RoleComponent },
  { path: 'refresh', component: RefreshUserComponent },
  { path: 'kontroluser', component: KontrolUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermaintenanceRoutingModule { }
