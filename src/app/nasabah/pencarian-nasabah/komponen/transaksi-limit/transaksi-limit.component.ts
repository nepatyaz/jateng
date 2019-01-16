import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transaksi-limit',
  templateUrl: './transaksi-limit.component.html',
  styles: []
})
export class TransaksiLimitComponent implements OnInit {

  //terima data dari parent component
  @Input() editTransaksiLimit;
  //kirim data ke parent 
  @Output() editTransaksiLimitEvent = new EventEmitter<string>();
  
  constructor() { }
  ngOnInit() {
  }

  funcUbahLimit(){
    this.editTransaksiLimit = false;
    this.editTransaksiLimitEvent.emit(this.editTransaksiLimit);
  }


}
