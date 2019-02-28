import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pencarian-daftar-hitam',
  templateUrl: './pencarian-daftar-hitam.component.html',
  styleUrls: ['./pencarian-daftar-hitam.component.css']
})
export class PencarianDaftarHitamComponent implements OnInit {

  kriteria: string;
  eachKriterias: string[] = ['Nama', 'Alamat', 'Tax Id. NPWP'];

  constructor() { }

  ngOnInit() {
  }

  cariFunction(value) {
    console.log(this.kriteria);
    console.log(value);
  }
}
