import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-teller-in-selisih-kas',
  templateUrl: './teller-in-selisih-kas.component.html',
  styleUrls: ['./teller-in-selisih-kas.component.css']
  
})
export class TellerInSelisihKasComponent implements OnInit {
  tanggal = Date.now();

  validatingForm: FormGroup;

  constructor(private _elementRef : ElementRef) { }
  ngOnInit() {
    this.validatingForm = new FormGroup(
      {
        mataUang: new FormControl(null, Validators.required),
        nilaiTransaksi: new FormControl(null, [Validators.required, Validators.min(10000), Validators.max(999999999999)]),
      }
    );
  }

  get inputMataUang() { return this.validatingForm.get('mataUang'); }
  get nilaiTransaksi() { return this.validatingForm.get('nilaiTransaksi'); }


  proses(){
    console.log("Proses Berjalan");
    let inputTanggal = this._elementRef.nativeElement.querySelector('#inputTanggal').value; 
    let inputNoReferensi = this._elementRef.nativeElement.querySelector('#inputNoReferensi').value; 
    let MataUang = this._elementRef.nativeElement.querySelector('#MataUang').value; 
    let nilaiTransaksi = this._elementRef.nativeElement.querySelector('#nilaiTransaksi').value; 
    let inputKeterangan = this._elementRef.nativeElement.querySelector('#inputKeterangan').value; 

    console.log(inputTanggal,inputNoReferensi,MataUang,nilaiTransaksi,inputKeterangan );
  }


}
