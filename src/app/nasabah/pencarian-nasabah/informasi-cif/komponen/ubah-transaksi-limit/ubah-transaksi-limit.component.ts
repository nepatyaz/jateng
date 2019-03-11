import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ubah-transaksi-limit',
  templateUrl: './ubah-transaksi-limit.component.html',
  styles: []
})
export class UbahTransaksiLimitComponent implements OnInit {

  //terima data dari parent component
  @Input() editTransaksiLimit;
  //kirim data ke parent 
  @Output() editTransaksiLimitEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  funcUbahLimit(){
    this.editTransaksiLimit = true;
    this.editTransaksiLimitEvent.emit(this.editTransaksiLimit);
  }


}
