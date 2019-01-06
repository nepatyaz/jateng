import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  public siteUrl = window.location.href;
  public isDashboard = false;

   tanggal = Date.now();

  constructor() {}

  ngOnInit() {

    if (sessionStorage.getItem('isLoggedIn') == "true") {
      this.isDashboard = true
    }
    else {
      this.isDashboard = false
    }
  }
}