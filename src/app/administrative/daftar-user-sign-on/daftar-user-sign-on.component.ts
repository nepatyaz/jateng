import { Component, OnInit , ViewChild} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';


export interface DataUserSignOn {
  user_id: string;
  nama: string;
  login: string;
  invalidate: string;
}

const dataUser : DataUserSignOn[] = [
  {user_id: 'JATENGSP', nama: 'JATENGSP', login: '19/10/2018, 11:17AM', invalidate: 'invalidate'},
  {user_id: 'JATENGSP2', nama: 'JATENGSP2', login: '20/10/2018, 11:17AM', invalidate: 'invalidate'},
  {user_id: 'JATENGSP3', nama: 'JATENGSP3', login: '21/10/2018, 10:17AM', invalidate: 'invalidate'},
  {user_id: 'JATENGSP4', nama: 'JATENGSP4', login: '22/10/2018, 09:17AM', invalidate: 'invalidate'},
  {user_id: 'JATENGSP5', nama: 'JATENGSP5', login: '23/10/2018, 01:17AM', invalidate: 'invalidate'},
  {user_id: 'JATENGSP6', nama: 'JATENGSP6', login: '24/10/2018, 02:17AM', invalidate: 'invalidate'},
  {user_id: 'JATENGSP7', nama: 'JATENGSP7', login: '25/10/2018, 03:17AM', invalidate: 'invalidate'},
  {user_id: 'JATENGSP8', nama: 'JATENGSP8', login: '25/10/2018, 03:17AM', invalidate: 'invalidate'},
  {user_id: 'JATENGSP9', nama: 'JATENGSP9', login: '25/10/2018, 03:17AM', invalidate: 'invalidate'},
  {user_id: 'JATENGSP10', nama: 'JATENGSP10', login: '25/10/2018, 03:17AM', invalidate: 'invalidate'},

];

@Component({
  selector: 'app-daftar-user-sign-on',
  templateUrl: './daftar-user-sign-on.component.html',
  styleUrls: ['./daftar-user-sign-on.component.css']
})
export class DaftarUserSignOnComponent implements OnInit {
  displayedColumns: string[] = ['user_id', 'nama', 'login', 'invalidate'];

  dataSource = new MatTableDataSource<DataUserSignOn>(dataUser);
  // dataSource = dataUser;
  tanggal = Date.now();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
