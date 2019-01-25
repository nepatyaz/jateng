import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabskartu',
  templateUrl: './tabskartu.component.html',
  styleUrls: ['./tabskartu.component.css']
})
export class TabskartuComponent implements OnInit {
  konten = [1, 0, 0, 0, 0]; 
  constructor() { }

  ngOnInit() {
  }

  
  //blok fungsi untuk menampilkan konten panel atas
  tabAktivasi() {
    this.konten = [1, 0, 0, 0, 0];
  }
  tabBlokir() {
    this.konten = [0, 1, 0, 0, 0];
  }
  tabBukaBlokir() {
    this.konten = [0, 0, 1, 0, 0];
  }
  tabTutupKartu() {
    this.konten = [0, 0, 0, 1, 0];
  }
  tabRelasiKartu() {
    this.konten = [0, 0, 0, 0, 1];
  }
  //end blok fungsi konten panel atas

}
