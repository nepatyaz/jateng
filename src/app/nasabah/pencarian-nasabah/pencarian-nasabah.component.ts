import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-pencarian-nasabah',
  templateUrl: './pencarian-nasabah.component.html',
  styleUrls: ['./pencarian-nasabah.component.css']
})

export class PencarianNasabahComponent implements AfterViewInit {

  konten = [1, 0, 0, 0, 0];
  konten1 = [1, 0, 0, 0, 0];
  editData: boolean = true;
  isichild;

  pesan = "pesan parent;"

  // @ViewChild(EditDataUmumNasabahComponent) editStatus;
  // @ViewChild(DataUmumNasabahComponent) dataStatus;
 // @ViewChild(ChildComponent) child;

  

  constructor() { }

  ngAfterViewInit() {

  }

  terimaStatusEdit($event) {
    this.editData = $event;
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
