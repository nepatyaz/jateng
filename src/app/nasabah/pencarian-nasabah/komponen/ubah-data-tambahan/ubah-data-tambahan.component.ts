import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ubah-data-tambahan',
  templateUrl: './ubah-data-tambahan.component.html',
  styles: []
})
export class UbahDataTambahanComponent implements OnInit {

      //terima data dari parent component
      @Input() editDataTambahan;
      //kirim data ke parent 
      @Output() editDataTambahanEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  funcUbahDataTambahan(){
    this.editDataTambahan = true;
    this.editDataTambahanEvent.emit(this.editDataTambahan);
  }


}
