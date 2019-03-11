import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-pesan',
  templateUrl: './pesan.component.html',
  styleUrls: ['./pesan.component.css']
})
export class PesanComponent implements OnInit {

  displayedColumns: string[] = ['Judul', 'DibuatOleh', 'TanggalDibuat', 'Cabang', 'TanggalJatuhTempo'];
  dataSource = new MatTableDataSource<SubElement>(ISI_DATA);
  selected = '';

  favoriteSeason: string;
  seasons: string[] = ['Permanen', 'Sementara'];

  isTambah: boolean = true;
  isUbah: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openForm() {
    this.isTambah = !this.isTambah;
  }

  editDetail() {
    this.isUbah = !this.isUbah;
  }

}


export interface SubElement {
  judul: string;
  dibuatOleh: string;
  tanggalDiBuat: number;
  cbg: string;
  tgljthtempo: number;
}

const ISI_DATA: SubElement[] = [
  { judul: 'Tabungan', dibuatOleh: 'Herza', tanggalDiBuat: Date.now(), cbg: 'Semarang', tgljthtempo: Date.now() }
];


