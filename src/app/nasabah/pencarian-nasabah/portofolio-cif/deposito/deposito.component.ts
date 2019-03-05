import { Component, OnInit } from '@angular/core';
import { interceptingHandler } from '@angular/common/http/src/module';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  displayedColumns: string[] = ['Account', 'Nama', 'Cabang', 'CCY', 'Type'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface periodicElement {
  account: number;
  nama: string;
  cabang: string;
  ccy: string;
  type: string;
}

const ELEMENT_DATA: periodicElement[] = [{ account: 1232353452, nama: 'AL Arraf', cabang: 'Cabang Utama', ccy: 'IDR', type: '104-Giro Swasta' },
{ account: 1235423423, nama: 'Suryani', cabang: 'Cabang Utama', ccy: 'IDR', type: '104-Giro Swasta' },
{ account: 12342344343, nama: 'Supri', cabang: 'Cabang Utama', ccy: 'IDR', type: '104-Giro Swasta' },
];
