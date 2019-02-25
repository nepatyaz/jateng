import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otorisasi-cif',
  templateUrl: './otorisasi-cif.component.html',
  styleUrls: ['./otorisasi-cif.component.css']
})
export class OtorisasiCifComponent implements OnInit {

  konten0 = true
  konten1: boolean = false;
  konten2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  fungsi0() {
    this.konten0 = true;
    this.konten1 = false;
    this.konten2 = false;

  }
  fungsi1() {
    this.konten0 = false;
    this.konten1 = true;
    this.konten2 = false;
  }

}
