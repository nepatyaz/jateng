import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ubah-data-personal',
  templateUrl: './ubah-data-personal.component.html',
  styles: []
})
export class UbahDataPersonalComponent implements OnInit {

  
  //terima data dari parent component
  @Input() editDataPersonal;
  //kirim data ke parent 
  @Output() editDataPersonalEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  funcUbahPersonal(){
    this.editDataPersonal = true;
    this.editDataPersonalEvent.emit(this.editDataPersonal);
  }

}
