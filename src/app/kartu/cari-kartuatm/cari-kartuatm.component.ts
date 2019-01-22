import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cari-kartuatm',
  templateUrl: './cari-kartuatm.component.html',
  styleUrls: ['./cari-kartuatm.component.css']
})
export class CariKartuatmComponent implements OnInit {
  konten = [1, 0, 0, 0, 0];
  constructor() { }

  ngOnInit() {
  }

  //blok fungsi untuk menampilkan konten panel atas
  tabAktivasi() {
    this.konten = [1, 0, 0, 0, 0];
  }
  tabBlokir() {
    this.konten = [0, 1, 0, 0, 0];
  }
  tabBukaBlokir() {
    this.konten = [0, 0, 1, 0, 0];
  }
  tabTutupKartu() {
    this.konten = [0, 0, 0, 1, 0];
  }
  tabRelasiKartu() {
    this.konten = [0, 0, 0, 0, 1];
  }
  //end blok fungsi konten panel atas

}
