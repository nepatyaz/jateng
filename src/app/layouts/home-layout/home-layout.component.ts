import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <app-header-home></app-header-home>
    <app-dashboard></app-dashboard>
  `,
  styles: []
})
export class HomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
