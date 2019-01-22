import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portofolio-cif',
  templateUrl: './portofolio-cif.component.html',
  styles: []
})
export class PortofolioCifComponent implements OnInit {

  konten = [1, 0, 0, 0, 0, 0];
  kontenTabungan = [1, 0, 0, 0, 0, 0];

  //blok fungsi untuk menampilkan konten panel atas
  tabTabungan() {
    this.konten = [1, 0, 0, 0, 0, 0];
  }
  tabGiro() {
    this.konten = [0, 1, 0, 0, 0, 0];
  }
  tabDeposito() {
    this.konten = [0, 0, 1, 0, 0, 0];
  }
  tabPinjaman() {
    this.konten = [0, 0, 0, 1, 0, 0];
  }
  tabFasilitas() {
    this.konten = [0, 0, 0, 0, 1, 0];
  }
  tabKartu() {
    this.konten = [0, 0, 0, 0, 0, 1];
  }
  //end blok fungsi konten panel atas

  //blok fungsi untuk menampilkan konten panel tabungan
  tabDataAdmin() {
    this.kontenTabungan = [1, 0, 0, 0, 0, 0];
  }
  tabDataSukuBunga() {
    this.kontenTabungan = [0, 1, 0, 0, 0, 0];
  }
  tabSaldoRekening() {
    this.kontenTabungan = [0, 0, 1, 0, 0, 0];
  }
  tabMutasi() {
    this.kontenTabungan = [0, 0, 0, 1, 0, 0];
  }
  tabBungaJasa() {
    this.kontenTabungan = [0, 0, 0, 0, 1, 0];
  }
  tabRiwayat() {
    this.kontenTabungan = [0, 0, 0, 0, 0, 1];
  }
  //end blok fungsi konten panel atas

  constructor() { }

  ngOnInit() {
  }

}
