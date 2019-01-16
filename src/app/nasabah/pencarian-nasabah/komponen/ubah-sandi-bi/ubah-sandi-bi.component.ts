import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ubah-sandi-bi',
  templateUrl: './ubah-sandi-bi.component.html',
  styles: []
})
export class UbahSandiBiComponent implements OnInit {

    //terima data dari parent
    @Input() editSandiBi;
    //kirim data ke parent 
    @Output() editSandiBiEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  funcUbahSandiBi(){
    window.alert('ubah');
    this.editSandiBi = true;
    this.editSandiBiEvent.emit(this.editSandiBi);

  }

}
