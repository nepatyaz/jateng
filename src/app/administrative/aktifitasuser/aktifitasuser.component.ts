import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aktifitasuser',
  templateUrl: './aktifitasuser.component.html',
  styleUrls: ['./aktifitasuser.component.css']
})
export class AktifitasuserComponent implements OnInit {
  tanggal = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
