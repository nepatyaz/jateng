import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tutup-kartu',
  templateUrl: './tutup-kartu.component.html',
  styleUrls: ['./tutup-kartu.component.css']
})
export class TutupKartuComponent implements OnInit {
  isTutup = false;
  isTutupProses = false;
  isNotifikasi = false;

  constructor() { }

  ngOnInit() {
  }

  prosesTutup(){
    console.log();
    this.isTutup = true;
    this.isTutupProses = true;
    this.isNotifikasi = false;
  }

  konfirmasiProsesTutup(){
    this.isTutupProses = false;
    this.isTutup = false;
    this.isNotifikasi = true;
  }
}

