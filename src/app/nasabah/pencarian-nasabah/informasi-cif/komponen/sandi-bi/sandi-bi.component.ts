import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sandi-bi',
  templateUrl: './sandi-bi.component.html',
  styles: []
})
export class SandiBiComponent implements OnInit {

  isEdit = false;
  //terima data dari parent
  @Input() editSandiBi;
  //kirim data ke parent 
  @Output() editSandiBiEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  funcUbahSandiBi() {
    // this.editSandiBi = false;
    // this.editSandiBiEvent.emit(this.editSandiBi);
    this.isEdit = !this.isEdit;

  }

}
