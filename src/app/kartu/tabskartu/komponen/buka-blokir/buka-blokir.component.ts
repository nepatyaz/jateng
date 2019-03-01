import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buka-blokir',
  templateUrl: './buka-blokir.component.html',
  styleUrls: ['./buka-blokir.component.css']
})
export class BukaBlokirComponent implements OnInit {
  isBlokir = false;
  isBlokirProses = false;
  isNotifikasi = false;

  constructor() { }

  ngOnInit() {
  }

  prosesBlokir(){
    console.log();
    this.isBlokir = true;
    this.isBlokirProses = true;
    this.isNotifikasi = false;
  }

  konfirmasiProsesBlokir(){
    this.isBlokirProses = false;
    this.isBlokir = false;
    this.isNotifikasi = true;
  }
}
