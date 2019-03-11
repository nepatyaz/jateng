import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-relasi-cif',
  templateUrl: './relasi-cif.component.html',
  styleUrls: ['./relasi-cif.component.css']
})
export class RelasiCifComponent implements OnInit {

  displayedColumns: string[] = ['No', 'Kode Nasabah', 'Name', 'No Kartu Id', 'Hubungan'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  isEdit = false;

  selected = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ubahData() {
    this.isEdit = !this.isEdit;
  }

}

export interface PeriodicElement {
  no: number;
  kodeNasabah: number;
  name: string;
  idCard: number;
  hub: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, kodeNasabah: 6767234, name: 'Syahrul', idCard: 325325, hub: 'Mitra Kerja' }
];