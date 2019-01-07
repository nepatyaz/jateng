import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  public siteUrl = window.location.href;
  public isDashboard = false;

   tanggal = Date.now();

  constructor(private router : Router) {}

  ngOnInit() {

    if (sessionStorage.getItem('isLoggedIn') == "true") {
      this.isDashboard = true
    }
    else {
      this.isDashboard = false
    }
  }
  fungsi(){
    window.alert('Logout')
    sessionStorage.setItem('isLoggedIn', "false");
    this.router.navigate(['/']);
  }

}