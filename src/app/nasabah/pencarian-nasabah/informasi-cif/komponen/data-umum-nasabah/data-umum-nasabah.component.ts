import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-umum-nasabah',
  templateUrl: './data-umum-nasabah.component.html',
  styleUrls: ['./data-umum-nasabah.component.css']
})
export class DataUmumNasabahComponent implements OnInit {
  isEdit = false;

  //terima data dari parent
  @Input() editData;
  //kirim data ke parent 
  @Output() editDataEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  funcUbah() {
    this.isEdit = !this.isEdit;
    // this.editData = false;
    // this.editDataEvent.emit(this.editData);
    // window.alert('ubah');
  }
  funcNon() {
    this.isEdit = false;
  }

}
