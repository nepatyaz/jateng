import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daftar-user-sign-on',
  templateUrl: './daftar-user-sign-on.component.html',
  styleUrls: ['./daftar-user-sign-on.component.css']
})
export class DaftarUserSignOnComponent implements OnInit {

  tanggal = Date.now();
  
  constructor() { }

  ngOnInit() {
  }

}
