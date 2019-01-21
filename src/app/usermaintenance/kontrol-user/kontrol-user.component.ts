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
  
  ktrlusers
  viewusers

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
    this.servis.getData().subscribe(data => {
      this.viewusers = data
    })
  }


  bukaModal(){
    this.basicModal.show()
  }

  hapusdata(id){
    
     this.alamat = "/ktrluser/"+id;

    this.http.get(this.ROOT_URL + this.alamat).subscribe();

    this.router.navigate(['maintenance/kontroluser']);


  }

}
