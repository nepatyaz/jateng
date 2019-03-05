import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermaintenanceRoutingModule } from './usermaintenance-routing.module';
import { CariBaruUserComponent } from './cari-baru-user/cari-baru-user.component';
import { GantiPasswordComponent } from './ganti-password/ganti-password.component';
import { GantiPasswordOverrideComponent } from './ganti-password-override/ganti-password-override.component';
import { KontrolUserComponent } from './kontrol-user/kontrol-user.component';
import { RefreshUserComponent } from './refresh-user/refresh-user.component';
import { RoleComponent } from './role/role.component';
import { TutupUserComponent } from './tutup-user/tutup-user.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';




@NgModule({
  imports: [
    CommonModule,
    UsermaintenanceRoutingModule,
    MDBBootstrapModule
  ],
  declarations: [
    CariBaruUserComponent,
    GantiPasswordComponent,
    GantiPasswordOverrideComponent,
    KontrolUserComponent,
    RefreshUserComponent,
    RoleComponent,
    TutupUserComponent
  ]
})
export class UsermaintenanceModule { }
