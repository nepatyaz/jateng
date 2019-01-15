import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-personal',
  templateUrl: './data-personal.component.html',
  styles: []
})
export class DataPersonalComponent implements OnInit {

  //terima data dari parent component
  @Input() editDataPersonal;
  //kirim data ke parent 
  @Output() editDataPersonalEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  funcUbahPersonal(){
    this.editDataPersonal = false;
    this.editDataPersonalEvent.emit(this.editDataPersonal);
  }

}
