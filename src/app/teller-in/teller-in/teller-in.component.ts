import { Component, OnInit , ElementRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { TargetLocator } from 'selenium-webdriver';

@Component({
  selector: 'app-teller-in',
  templateUrl: './teller-in.component.html',
  styleUrls: ['./teller-in.component.css']
})
export class TellerInComponent implements OnInit {

  tanggal = Date.now();

  validatingForm: FormGroup;

  constructor(private _elementRef : ElementRef) { }

  ngOnInit() {
    this.validatingForm = new FormGroup(
      {
        // tanggal: new FormControl(null, Validators.required),
        // rekeningDebit: new FormControl(null,  [Validators.required, Validators.min(1000000), Validators.max(999999999999)]),
        // rekeningKredit: new FormControl(null, [Validators.required, Validators.min(1000000), Validators.max(999999999999)]),
        nilaiTransaksi: new FormControl(null, Validators.required),
        mataUang: new FormControl(null, Validators.required),

      }
    );
  }

  get inputNilai() { return this.validatingForm.get('nilaiTransaksi'); }
  get inputMataUang() { return this.validatingForm.get('mataUang'); }


  proses(){
    console.log("Proses Berjalan");
    let NilaiTransaksi = this._elementRef.nativeElement.querySelector('#nilaiTransaksi').value; 
    let MataUang = this._elementRef.nativeElement.querySelector('#MataUang').value; 
    let TglValuta = this._elementRef.nativeElement.querySelector('#TglValuta').value; 
    let NoReferensi = this._elementRef.nativeElement.querySelector('#NoReferensi').value; 
    let Keterangan = this._elementRef.nativeElement.querySelector('#Keterangan').value; 
    console.log(NilaiTransaksi, MataUang, TglValuta, NoReferensi, Keterangan);
  }


}
