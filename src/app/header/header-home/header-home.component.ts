import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {
  tanggal = Date.now();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  fungsi() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
