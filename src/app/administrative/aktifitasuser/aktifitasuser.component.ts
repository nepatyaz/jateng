import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface DataUser {
  tanggal: string;
  waktu: string;
  user_id: string;
  aktifitas: string;
}

const dataUser: DataUser[] = [
  { tanggal: '24-05-2018', waktu: '09:55:01', user_id: 'JATENGSP', aktifitas: 'Login Sukses' },
  { tanggal: '24-05-2018', waktu: '09:59:01', user_id: 'CSR', aktifitas: 'Login Sukses' },
  { tanggal: '24-05-2018', waktu: '10:12:01', user_id: 'CSR', aktifitas: 'Change User Password' },
  { tanggal: '24-05-2018', waktu: '10:13:11', user_id: 'CSR', aktifitas: 'Logout' },
  { tanggal: '24-05-2018', waktu: '10:17:21', user_id: 'Teller', aktifitas: 'Login Sukses' },
  { tanggal: '24-05-2018', waktu: '10:24:15', user_id: 'Teller', aktifitas: 'Change User Password' },
  { tanggal: '24-05-2018', waktu: '10:27:15', user_id: 'JATENGSP', aktifitas: 'Logout' },
  { tanggal: '24-05-2018', waktu: '10:28:20', user_id: 'JATENGSP', aktifitas: 'Login Sukses' },
  { tanggal: '24-05-2018', waktu: '10:30:05', user_id: 'JATENGSP', aktifitas: 'Logout' },

];

@Component({
  selector: 'app-aktifitasuser',
  templateUrl: './aktifitasuser.component.html',
  styleUrls: ['./aktifitasuser.component.css']
})
export class AktifitasuserComponent implements OnInit {

  displayedColumns: string[] = ['tanggal', 'waktu', 'user_id', 'aktifitas', 'detail'];
  dataSource = new MatTableDataSource<DataUser>(dataUser);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  tanggal = Date.now();
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  test(value : string){
    console.log(value);
  }

}
