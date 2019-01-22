import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riwayat-saldo',
  templateUrl: './riwayat-saldo.component.html',
  styles: []
})
export class RiwayatSaldoComponent implements OnInit {
  tanggal = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
