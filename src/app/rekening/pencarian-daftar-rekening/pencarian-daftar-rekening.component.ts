import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pencarian-daftar-rekening',
  templateUrl: './pencarian-daftar-rekening.component.html',
  styleUrls: ['./pencarian-daftar-rekening.component.css']
})
export class PencarianDaftarRekeningComponent implements OnInit {

  optionsSelect: Array<any>;

  constructor() { }

  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
  }


}
