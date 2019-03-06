import { Component, OnInit } from '@angular/core';
import { periodicElement } from '../../deposito.component';

@Component({
  selector: 'app-detail-mutasi-deposito',
  templateUrl: './detail-mutasi-deposito.component.html',
  styleUrls: ['./detail-mutasi-deposito.component.css']
})
export class DetailMutasiDepositoComponent implements OnInit {

  displayedColumns: string[] = ['Tanggal Buku', 'Tanggal Berlalu', 'Even', 'Refrensi', 'Keterangan', 'Rekening', 'Bunga',
    'Pajak', 'Rate Pajak', 'Mutasi', 'User', 'Otorisator'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  tanggalBuku: string;
  tanggalBerlalu: string;
  even: string;
  noRefrensi: string;
  keterangan: string;
  noRekening: number;
  rateBunga: number;
  kodePajak: number;
  baseRate: string;
  mutasi: number;
  user: string;
  otorisator: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { tanggalBuku: '10/02/2019', tanggalBerlalu: '10/02/2019', even: 'A', noRefrensi: 'REF2000212', keterangan: 'Penempatan Deposito Tunai', noRekening: 82634238, rateBunga: 120, kodePajak: 20, baseRate: 'Suku Bunga Pajak 20%', mutasi: 10000000, user: 'Syieo32389', otorisator: 'JTGSIGMA234' },
  { tanggalBuku: '10/02/2019', tanggalBerlalu: '10/02/2019', even: 'A', noRefrensi: 'REF2000212', keterangan: 'Penempatan Deposito Tunai', noRekening: 82634238, rateBunga: 120, kodePajak: 20, baseRate: 'Suku Bunga Pajak 20%', mutasi: 10000000, user: 'Syieo32389', otorisator: 'JTGSIGMA234' },
  { tanggalBuku: '10/02/2019', tanggalBerlalu: '10/02/2019', even: 'A', noRefrensi: 'REF2000212', keterangan: 'Penempatan Deposito Tunai', noRekening: 82634238, rateBunga: 120, kodePajak: 20, baseRate: 'Suku Bunga Pajak 20%', mutasi: 10000000, user: 'Syieo32389', otorisator: 'JTGSIGMA234' },
  { tanggalBuku: '10/02/2019', tanggalBerlalu: '10/02/2019', even: 'A', noRefrensi: 'REF2000212', keterangan: 'Penempatan Deposito Tunai', noRekening: 82634238, rateBunga: 120, kodePajak: 20, baseRate: 'Suku Bunga Pajak 20%', mutasi: 10000000, user: 'Syieo32389', otorisator: 'JTGSIGMA234' }
];
