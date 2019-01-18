import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giro',
  templateUrl: './giro.component.html',
  styles: []
})
export class GiroComponent implements OnInit {

  kontenGiro = [1, 0, 0, 0, 0, 0, 0, 0];
  
  constructor() { }

  ngOnInit() {
  }


  tabDataAdmin(){
    this.kontenGiro = [1, 0, 0, 0, 0, 0, 0, 0];
  }

  tabDataSukuBunga(){
    this.kontenGiro = [0, 1, 0, 0, 0, 0, 0, 0];
  }
  tabSaldoRekening(){
    this.kontenGiro = [0, 0, 1, 0, 0, 0, 0, 0];
  }
  tabMutasi(){
    this.kontenGiro = [0, 0, 0, 1, 0, 0, 0, 0];
  }
  tabBungaJasa(){
    this.kontenGiro = [0, 0, 0, 0, 1, 0, 0, 0];
  }
  tabRiwayat(){
    this.kontenGiro = [0, 0, 0, 0, 0, 1, 0, 0];
  }

}
