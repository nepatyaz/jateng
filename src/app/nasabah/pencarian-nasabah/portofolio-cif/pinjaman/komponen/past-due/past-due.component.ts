import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-past-due',
  templateUrl: './past-due.component.html',
  styleUrls: ['./past-due.component.css']
})
export class PastDueComponent implements OnInit {

  displayedColumns: string[] = ['Value Date', 'Start Date', 'End Date', 'CLS Code', 'CLS Desc',
    'Amount Due', 'Paid Amount', 'Late Charge Amount', 'Paid Late Charge', 'No.Reff', 'Rssque', 'Source Flag'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  valueDate: string;
  startDate: string;
  endDate: string;
  clsCode: string
  clsDesc: string;
  amountDue: number;
  paidAmount: number;
  lateChargeAmount: number;
  paidLateCharge: number;
  noReff: number;
  rssque: number;
  srcFlag: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { valueDate: '', startDate: '', endDate: '', clsCode: 'P', clsDesc: 'Interest', amountDue: 0, paidAmount: 0, lateChargeAmount: 0, paidLateCharge: 0, noReff: 0, rssque: 0, srcFlag: 'L' },
  { valueDate: '01/01/2019', startDate: '01/01/2019', endDate: '01/01/2019', clsCode: 'I', clsDesc: 'Principle', amountDue: 0, paidAmount: 0, lateChargeAmount: 0, paidLateCharge: 0, noReff: 0, rssque: 0, srcFlag: 'R' }
];