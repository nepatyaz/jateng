import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giro',
  templateUrl: './giro.component.html',
  styles: ['table {min-width: 1170px; margin-bottom: 20px; width: 100%;}']
})

export class GiroComponent implements OnInit {

  displayedColumns: string[] = ['Account', 'Nama', 'Cabang', 'CCY', 'Type'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }




}

export interface PeriodicElement {
  account: number;
  nama: string;
  cabang: string;
  ccy: string;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { account: 1232353452, nama: 'AL Arraf', cabang: 'Cabang Utama', ccy: 'IDR', type: '104-Giro Swasta' },
  { account: 1235423423, nama: 'Suryani', cabang: 'Cabang Utama', ccy: 'IDR', type: '104-Giro Swasta' },
  { account: 12342344343, nama: 'Supri', cabang: 'Cabang Utama', ccy: 'IDR', type: '104-Giro Swasta' },
];
