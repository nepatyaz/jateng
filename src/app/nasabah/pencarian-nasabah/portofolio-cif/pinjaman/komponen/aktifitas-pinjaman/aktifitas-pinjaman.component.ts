import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aktifitas-pinjaman',
  templateUrl: './aktifitas-pinjaman.component.html',
  styleUrls: ['./aktifitas-pinjaman.component.css']
})
export class AktifitasPinjamanComponent implements OnInit {

  displayedColumns: string[] = ['Value Date', 'Trans Description', 'Amount', 'Settle Acc', 'Acc Key'];
  dataSource = Element_Data;

  constructor() { }

  ngOnInit() {
  }

}

export interface elementsdata {
  valueDate: string;
  transDescription: string;
  ammount: number;
  sttleAcc: number;
  accKey: string;
}

const Element_Data: elementsdata[] = [
  { valueDate: '07/10/2019', transDescription: 'Pembayaran Angsuran Jatuh Tempo', ammount: 10000000, sttleAcc: 12301230010, accKey: 'LLDWAA' },
  { valueDate: '07/10/2019', transDescription: 'Pembayaran Angsuran Jatuh Tempo', ammount: 10000000, sttleAcc: 12301230010, accKey: 'LLDWAA' },
  { valueDate: '07/10/2019', transDescription: 'Pembayaran Angsuran Jatuh Tempo', ammount: 10000000, sttleAcc: 12301230010, accKey: 'LLDWAA' },
  { valueDate: '07/10/2019', transDescription: 'Pembayaran Angsuran Jatuh Tempo', ammount: 10000000, sttleAcc: 12301230010, accKey: 'LLDWAA' },
  { valueDate: '07/10/2019', transDescription: 'Pembayaran Angsuran Jatuh Tempo', ammount: 10000000, sttleAcc: 12301230010, accKey: 'LLDWAA' },
  { valueDate: '07/10/2019', transDescription: 'Pembayaran Angsuran Jatuh Tempo', ammount: 10000000, sttleAcc: 12301230010, accKey: 'LLDWAA' },
  { valueDate: '07/10/2019', transDescription: 'Pembayaran Angsuran Jatuh Tempo', ammount: 10000000, sttleAcc: 12301230010, accKey: 'LLDWAA' }
];