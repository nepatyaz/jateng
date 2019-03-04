import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-personal',
  templateUrl: './data-personal.component.html',
  styles: []
})
export class DataPersonalComponent implements OnInit {

  isEdit = false;
  //terima data dari parent component
  @Input() editDataPersonal;
  //kirim data ke parent 
  @Output() editDataPersonalEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  funcNon() {
    // console.log('test');
    this.isEdit = !this.isEdit;
  }


}
