import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  tanggal = Date.now();

  constructor(private router : Router){}
  ngOnInit() {
  }

  fungsi() {
    sessionStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userinfo');
    this.router.navigate(['/'])
  }

}