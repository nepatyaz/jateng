import { Component, OnInit , ElementRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tanggalbisnis',
  templateUrl: './tanggalbisnis.component.html',
  styleUrls: ['./tanggalbisnis.component.css']
})
export class TanggalbisnisComponent implements OnInit { 
  tanggal = Date.now();
  validatingForm: FormGroup;

  constructor() {}
  ngOnInit() {
    this.validatingForm = new FormGroup(
      {
        inputTanggal: new FormControl(null, Validators.required),
      }
    );
  }

  get inputTanggal() { return this.validatingForm.get('inputTanggal'); }

}
