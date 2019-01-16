import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-tambahan',
  templateUrl: './data-tambahan.component.html',
  styles: []
})
export class DataTambahanComponent implements OnInit {

    //terima data dari parent component
    @Input() editDataTambahan;
    //kirim data ke parent 
    @Output() editDataTambahanEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  funcUbahDataTambahan(){
    this.editDataTambahan = false;
    this.editDataTambahanEvent.emit(this.editDataTambahan);
  }

}
