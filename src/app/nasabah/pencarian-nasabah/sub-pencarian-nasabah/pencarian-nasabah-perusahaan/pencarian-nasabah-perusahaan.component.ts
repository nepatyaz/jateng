import { Component, OnInit } from '@angular/core';

export interface Periodic {
  name: string;
  address: string;
  npwp: number;
}

const Element_data: Periodic[] = [
  { name: 'Maju Terus', address: 'Jl. Kaka Tua No.99 Semarang', npwp: 763456238878 }
];

@Component({
  selector: 'app-pencarian-nasabah-perusahaan',
  templateUrl: './pencarian-nasabah-perusahaan.component.html',
  styleUrls: ['./pencarian-nasabah-perusahaan.component.css']
})
export class PencarianNasabahPerusahaanComponent implements OnInit {

  displayedColumns: string[] = ['Nama Nasabah', 'Alamat', 'NPWP'];
  dataSource = Element_data;

  constructor() { }

  ngOnInit() {
  }

}
