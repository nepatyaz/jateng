import { Component, AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-pencarian-nasabah',
  templateUrl: './pencarian-nasabah.component.html',
  styleUrls: ['./pencarian-nasabah.component.css']
})

export class PencarianNasabahComponent implements AfterViewInit {

  konten = [1, 0, 0, 0, 0];
  konten1 = [1, 0, 0, 0, 0];
  editData: boolean = true;
  editDataPersonal : boolean = true;
  editTransaksiLimit : boolean = true;


  constructor() { }

  ngAfterViewInit() {
  }

  statusEdit($event) {
    this.editData = $event;
  }

  statusEditDataPersonal($event){
    this.editDataPersonal = $event;
  }

  statusEditTransaksiLimit($event){
    this.editTransaksiLimit = $event;
  }

  //blok fungsi untuk menampilkan konten panel atas
  tabInformasi() {
    this.konten = [1, 0, 0, 0, 0];
  }
  tabPortofolio() {
    this.konten = [0, 1, 0, 0, 0];
  }
  tabRelasi() {
    this.konten = [0, 0, 1, 0, 0];
  }
  tabAlamat() {
    this.konten = [0, 0, 0, 1, 0];
  }
  tabPesan() {
    this.konten = [0, 0, 0, 0, 1];
  }
  //end blok fungsi konten panel atas

  //blok fungsi tab konten panel informasi cif
  tabDataUmum() {
    this.konten1 = [1, 0, 0, 0, 0];
  }
  tabDataPersonal() {
    this.konten1 = [0, 1, 0, 0, 0];
  }
  tabDataTransaksi() {
    this.konten1 = [0, 0, 1, 0, 0];
  }
  tabDataSandiBi() {
    this.konten1 = [0, 0, 0, 1, 0];
  }
  tabDataTambahan() {
    this.konten1 = [0, 0, 0, 0, 1];
  }
  //blok fungsi tab konten panel informasi cif

}
