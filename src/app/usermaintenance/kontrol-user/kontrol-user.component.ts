import { Component, OnInit } from '@angular/core';
import { KtrlUser } from '../ktrluser.service';

@Component({
  selector: 'app-kontrol-user',
  templateUrl: './kontrol-user.component.html',
  styleUrls: ['./kontrol-user.component.css']
})
export class KontrolUserComponent implements OnInit {
  
  ktrlusers

  constructor(private servis: KtrlUser) { }

  ngOnInit() {
    this.servis.getData().subscribe(data => {
      this.ktrlusers = data
    })
  }

}
