import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aktivasi-kartu',
  templateUrl: './aktivasi.component.html',
  styleUrls: ['./aktivasi.component.css']
})
export class AktivasiComponent implements OnInit {

  isProsesAktivasi = false;

  constructor() { }

  ngOnInit() {
  }

  prosesAktivasi() {
    console.log("notif aktivasi kartu ");
    this.isProsesAktivasi = true;
  }

}
