import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otorisasi-rekening-konfidensial',
  templateUrl: './otorisasi-rekening-konfidensial.component.html',
  styleUrls: ['./otorisasi-rekening-konfidensial.component.css']
})
export class OtorisasiRekeningKonfidensialComponent implements OnInit {

  public headElements = ['IP', 'Rekening', 'Nama', 'No CIF', 'DP', 'Mata Uang', 'Cabang', 'User'];

  public elements: any = [
    { ip: '27-Rekening Konfidensial', rekening: 8084081008, nama: 'A Dono', noCIF: '00006165', dp: 'DC', mataUang: 'IDR', cabang: 34, user: 'UATD34CB01' },
    { ip: '28-Rekening Konfidensial', rekening: 8084772808, nama: 'A Kasino', noCIF: '00006166', dp: 'DC', mataUang: 'IDR', cabang: 36, user: 'UATD34CB01' },
    { ip: '29-Rekening Konfidensial', rekening: 8083235552, nama: 'A Indro', noCIF: '00006167', dp: 'DC', mataUang: 'IDR', cabang: 32, user: 'UATD34CB01' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
