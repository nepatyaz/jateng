import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cari-kartuatm',
  templateUrl: './cari-kartuatm.component.html',
  styleUrls: ['./cari-kartuatm.component.css']
})
export class CariKartuatmComponent implements OnInit {
  isAktivasiKartu = false;
  isPencarian = true;


  constructor() { }

  ngOnInit() {
  }

  aktivasiMenu(){
    this.isPencarian = !this.isPencarian;
    this.isAktivasiKartu = !this.isAktivasiKartu;
    console.log("aktvasi menu di aktifkan");
  }

  pencarianKartu(){
    this.isPencarian = true;
  }

}
