import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'relasi-kartu',
  templateUrl: './relasi-kartu.component.html',
  styleUrls: ['./relasi-kartu.component.css']
})
export class RelasiKartuComponent implements OnInit {
    isRelasi = false;
    isRelasiProses = false;
    isNotifikasi = false;
  
    constructor() { }
  
    ngOnInit() {
    }
  
    prosesRelasi(){
      console.log();
      this.isRelasi = true;
      this.isRelasiProses = true;
      this.isNotifikasi = false;
    }
  
    konfirmasiProsesRelasi(){
      this.isRelasiProses = false;
      this.isRelasi = false;
      this.isNotifikasi = true;
    }
  }
  
  
