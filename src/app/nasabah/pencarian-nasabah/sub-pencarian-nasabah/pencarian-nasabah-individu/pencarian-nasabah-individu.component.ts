import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  address: string;
  tglLahir: number;
  jenisKartu: string;
  noKartu: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Roy Suryo', address: 'Jalan Patimura No. 99 Semarang', tglLahir: Date.now(), jenisKartu: 'KTP', noKartu: 23749236647283 }
];


@Component({
  selector: 'app-pencarian-nasabah-individu',
  templateUrl: './pencarian-nasabah-individu.component.html',
  styleUrls: ['./pencarian-nasabah-individu.component.css']
})
export class PencarianNasabahIndividuComponent implements OnInit {

  displayedColumns: string[] = ['Nama Nasabah', 'Alamat', 'Tanggal Lahir', 'Jenis Kartu Identitas', 'No Kartu Identitas'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
