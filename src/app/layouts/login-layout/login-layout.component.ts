import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  template: `
  <app-header></app-header>
  <app-login-form></app-login-form>
  <app-footer></app-footer>
  `,
  styles: []
})
export class LoginLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
