import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blokir-kartu',
  templateUrl: './blokir.component.html',
  styleUrls: ['./blokir.component.css']
})
export class BlokirComponent implements OnInit {
  isBlokir = true;
  isBlokirProses = false;


  constructor() { }

  ngOnInit() {
  }

  prosesBlokir(){
    this.isBlokir = false;
  }

  konfirmasiProsesBlokir(){
    this.isBlokirProses = true;
  }

}
