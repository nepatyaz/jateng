import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-pencarian-nasabah',
  templateUrl: './pencarian-nasabah.component.html',
  styleUrls: ['./pencarian-nasabah.component.css']
})

export class PencarianNasabahComponent implements AfterViewInit {


  public elements: any = [
    { namaNasabah: 'Al Mulyadi', alamat: 'Jetin RY RT03 RW02 GENTAN BAKI SUKOHARJO', kota: 'KAB.SUKOHARJO', kodeNasabah: 802828281, jenisNasabah: 'Individual', accountOfficer: 'CS' }
  ];

  constructor() {

  }
  // konten = [1, 0, 0, 0, 0];
  // konten1 = [1, 0, 0, 0, 0];

  //variabel untuk konten pada tab informasi cif
  // editData: boolean = true;
  // editDataPersonal : boolean = true;
  // editTransaksiLimit : boolean = true;
  // editSandiBi : boolean = true;
  // editDataTambahan : boolean = true;
  //variabel untuk konten pada tab informasi cif   



  ngAfterViewInit() {
  }
}


  //blok untuk function penerimaan data pada tab informasi cif
  // statusEdit($event) { this.editData = $event;}
  // statusEditDataPersonal($event){ this.editDataPersonal = $event;}
  // statusEditTransaksiLimit($event){ this.editTransaksiLimit = $event;}
  // statusEditSandiBi($event){this.editSandiBi = $event;}
  // statusEditDataTambahan($event){this.editDataTambahan = $event;}
  //blok untuk function penerimaan data pada tab informasi cif

  //blok fungsi untuk menampilkan konten panel atas
  // tabInformasi() {
  //   this.konten = [1, 0, 0, 0, 0];
  // }
  // tabPortofolio() {
  //   this.konten = [0, 1, 0, 0, 0];
  // }
  // tabRelasi() {
  //   this.konten = [0, 0, 1, 0, 0];
  // }
  // tabAlamat() {
  //   this.konten = [0, 0, 0, 1, 0];
  // }
  // tabPesan() {
  //   this.konten = [0, 0, 0, 0, 1];
  // }
  //end blok fungsi konten panel atas

  //blok fungsi tab konten panel informasi cif
  // tabDataUmum() {
  //   this.konten1 = [1, 0, 0, 0, 0];
  // }
  // tabDataPersonal() {
  //   this.konten1 = [0, 1, 0, 0, 0];
  // }
  // tabDataTransaksi() {
  //   this.konten1 = [0, 0, 1, 0, 0];
  // }
  // tabDataSandiBi() {
  //   this.konten1 = [0, 0, 0, 1, 0];
  // }
  // tabDataTambahan() {
  //   this.konten1 = [0, 0, 0, 0, 1];
  // }
  //blok fungsi tab konten panel informasi cif


