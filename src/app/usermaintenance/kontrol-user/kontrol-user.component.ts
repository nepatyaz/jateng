import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { KtrluserService } from 'src/app/ktrluser.service';

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

}
