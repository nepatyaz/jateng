import { Component, OnInit } from '@angular/core';
import { a } from '@angular/core/src/render3';

@Component({
  selector: 'app-balancing',
  templateUrl: './balancing.component.html',
  styleUrls: ['./balancing.component.css']
})
export class BalancingComponent implements OnInit {

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
  fungsi2() {
    this.konten0 = false;
    this.konten1 = false;
    this.konten2 = true;
  }

}
