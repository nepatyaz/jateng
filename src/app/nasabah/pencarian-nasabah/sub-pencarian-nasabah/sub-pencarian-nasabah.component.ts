import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-pencarian-nasabah',
  templateUrl: './sub-pencarian-nasabah.component.html',
  styleUrls: ['./sub-pencarian-nasabah.component.css']
})
export class SubPencarianNasabahComponent implements OnInit {

  chosenValue: string;
  kriteria: string[] = ['Kode Nasabah', 'Kode Cabang', 'No Kartu Identitas', 'Alamat', 'Nama Nasabah', 'Tanggal Lahir'];
  checked = false;

  constructor() { }

  ngOnInit() {
  }

}
