import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ChangeOfflineLimitComponent } from 'src/app/administrative/change-offline-limit/change-offline-limit.component';

@Component({
  selector: 'app-fasilitas',
  templateUrl: './fasilitas.component.html',
  styleUrls: ['./fasilitas.component.css']
})
export class FasilitasComponent implements OnInit {

  displayedColumns: string[] = ['Account', 'Nama', 'Cabang', 'CCY', 'Type'];
  dataSource = new MatTableDataSource<paraElement>(ELEMENT_DATA);

  isEdit = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ChangeOn() {
    this.isEdit = !this.isEdit;
  }

}

export interface paraElement {
  account: number;
  nama: string;
  cabang: string;
  ccy: string;
  type: string;
}

const ELEMENT_DATA: paraElement[] = [{ account: 1232353452, nama: 'AL Arraf', cabang: 'Cabang Utama', ccy: 'IDR', type: '104-Giro Swasta' },
{ account: 1235423423, nama: 'Suryani', cabang: 'Cabang Utama', ccy: 'IDR', type: '104-Giro Swasta' },
{ account: 12342344343, nama: 'Supri', cabang: 'Cabang Utama', ccy: 'IDR', type: '104-Giro Swasta' },
];

