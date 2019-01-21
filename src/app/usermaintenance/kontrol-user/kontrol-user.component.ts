import { Component, OnInit,ViewChild } from '@angular/core';
import { KtrluserService } from 'src/app/ktrluser.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kontrol-user',
  templateUrl: './kontrol-user.component.html',
  styleUrls: ['./kontrol-user.component.css']
})
export class KontrolUserComponent implements OnInit {
  
  ktrlusers;
  viewusers;
  
  nama : String;
  userid : String;
  id : String;
  logAkhir : String;
  logoutAkhir : String;
  status : String;
  kodeDep :String;


  readonly ROOT_URL = '';
  alamat
  post : any;
  
  @ViewChild('basicModal') basicModal: ModalDirective;

  constructor(private servis: KtrluserService, private http : HttpClient,private router : Router) { }

  private headers = new Headers({'Content-Type': 'application/json'});

  ngOnInit() {
    this.servis.getData().subscribe(data => {
      this.ktrlusers = data
    })
  }

  bukaModal(id){
    console.log(id)
    this.servis.getData2(id).subscribe(data => {
      //this.records = data

      
        this.userid = data[0].UserId;
        this.nama = data[0].Nama;
        this.logAkhir = data[0].LoginAkhir;
        this.logoutAkhir = data[0].LogoutAkhir;
        this.status = data[0].Status;
        this.kodeDep = data[0].KodeDept;

       console.log(this.userid);
       console.log(this.nama);
       console.log(this.logAkhir);
      
      this.basicModal.show()
    })
  }

  hapusdata(id){
    
     this.alamat = "/ktrluser/"+id;

    this.http.get(this.ROOT_URL + this.alamat).subscribe();

    this.router.navigate(['maintenance/kontroluser']);


  }

}
