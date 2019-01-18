import { Component, OnInit,ViewChild } from '@angular/core';
import { KtrluserService } from 'src/app/ktrluser.service';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-kontrol-user',
  templateUrl: './kontrol-user.component.html',
  styleUrls: ['./kontrol-user.component.css']
})
export class KontrolUserComponent implements OnInit {
  
  ktrlusers
  @ViewChild('basicModal') basicModal: ModalDirective;

  constructor(private servis: KtrluserService) { }

  ngOnInit() {
    this.servis.getData().subscribe(data => {
      this.ktrlusers = data
      console.log(this.ktrlusers.UserId)
    })
  }


  bukaModal(){
    this.basicModal.show()
  }

}
