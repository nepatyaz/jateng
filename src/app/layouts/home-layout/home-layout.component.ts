import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <app-header-home></app-header-home>
    <app-home-nav></app-home-nav>
    <router-outlet></router-outlet>
    <app-footer-home></app-footer-home>
    
  `,
  styles: []
})
export class HomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
