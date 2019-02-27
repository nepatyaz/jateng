import { Component, OnInit , ElementRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-teller-in-sinkron-fin',
  templateUrl: './teller-in-sinkron-fin.component.html',
  styleUrls: ['./teller-in-sinkron-fin.component.css']
})
export class TellerInSinkronFinComponent implements OnInit {
  validatingForm: FormGroup;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
    this.validatingForm = new FormGroup(
      {
        kodeTransaksi: new FormControl(null, Validators.required),
      }
    );
  }


  get kodeTransaksi() { return this.validatingForm.get('kodeTransaksi'); }

  proses(){
    console.log("Proses Berjalan");
    let kodeTransaksi = this._elementRef.nativeElement.querySelector('#kodeTransaksi').value;
    console.log(kodeTransaksi );
  }

}
