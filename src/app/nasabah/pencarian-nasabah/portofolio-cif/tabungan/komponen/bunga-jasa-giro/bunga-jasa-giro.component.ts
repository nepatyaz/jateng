import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bunga-jasa-giro',
  templateUrl: './bunga-jasa-giro.component.html',
  styles: []
})
export class BungaJasaGiroComponent implements OnInit {
  page = 4;
  tanggal = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
