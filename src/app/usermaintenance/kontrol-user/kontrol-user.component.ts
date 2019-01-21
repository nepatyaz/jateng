import { Component, OnInit,ViewChild } from '@angular/core';
import { KtrluserService } from 'src/app/ktrluser.service';
import { ViewuserService } from 'src/app/viewuser.service';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-kontrol-user',
  templateUrl: './kontrol-user.component.html',
  styleUrls: ['./kontrol-user.component.css']
})
export class KontrolUserComponent implements OnInit {
  
  ktrlusers
  viewusers
  
  @ViewChild('basicModal') basicModal: ModalDirective;

  constructor(private servis: KtrluserService) { }

  ngOnInit() {
    this.servis.getData().subscribe(data => {
      this.ktrlusers = data
      console.log(this.ktrlusers.UserId)
    })
    
  }

  bukaModal(id){
    console.log(id)
    this.servis.getData2(id).subscribe(data => {
      this.viewusers = data
      // var isidata = {
      //   userid : 'string;',
      //   nama:'agus'
      // }
      this.basicModal.show()
    })
    
  }

}
