import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { PaginationComponent } from './pagination/pagination.component';
import { Pagination2Component } from './pagination2/pagination2.component';
import { WebcamComponent } from './webcam/webcam.component';

const routes: Routes = [
  {
    path: "button",component : ButtonComponent
  },
  {
    path: "pagination",component : PaginationComponent
  },
  {
    path: "pagination2",component : Pagination2Component
  },
  {
    path: "webcam",component : WebcamComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
