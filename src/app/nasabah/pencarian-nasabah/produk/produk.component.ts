import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.css']
})
export class ProdukComponent implements OnInit {

  chosenValue: string;
  kriteria: string[] = ['Kode Nasabah', 'Kode Cabang', 'No Kartu Identitas', 'Alamat', 'Nama Nasabah', 'Tanggal Lahir'];
  checked = false;

  constructor() { }

  ngOnInit() {
  }

}
