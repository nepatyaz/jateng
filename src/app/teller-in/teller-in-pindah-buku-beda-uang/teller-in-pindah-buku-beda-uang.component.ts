import { Component, OnInit,ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-teller-in-pindah-buku-beda-uang',
  templateUrl: './teller-in-pindah-buku-beda-uang.component.html',
  styleUrls: ['./teller-in-pindah-buku-beda-uang.component.css']
})
export class TellerInPindahBukuBedaUangComponent implements OnInit {

  validatingForm: FormGroup;
  constructor(private _elementRef : ElementRef) { }

  ngOnInit() {
    this.validatingForm = new FormGroup(
      {
       
        inputTanggal: new FormControl(null, Validators.required),
        inputNoRekeningDebit: new FormControl(null, [Validators.required, Validators.min(1000000), Validators.max(999999999999)]),
        inputNilaiDebit: new FormControl(null, [Validators.required, Validators.min(10000), Validators.max(999999999999)]),
        inputNoRekKredit: new FormControl(null, [Validators.required, Validators.min(1000000), Validators.max(999999999999)]),
        inputNilaiKredit: new FormControl(null, [Validators.required, Validators.min(10000), Validators.max(999999999999)]),
        inputNilaiEkuivalen: new FormControl(null, [Validators.required, Validators.min(10000), Validators.max(999999999999)]),
 
      }
    );
  }

  get inputTanggal() { return this.validatingForm.get('inputTanggal'); }
  get inputNoRekeningDebit() { return this.validatingForm.get('inputNoRekeningDebit'); }
  get inputNilaiDebit() { return this.validatingForm.get('inputNilaiDebit'); }
  get inputNoRekKredit() { return this.validatingForm.get('inputNoRekKredit'); }
  get inputNilaiKredit() { return this.validatingForm.get('inputNilaiKredit'); }
  get inputNilaiEkuivalen() { return this.validatingForm.get('inputNilaiEkuivalen'); }


  proses(){
    console.log("Proses Berjalan");
    let inputTanggal = this._elementRef.nativeElement.querySelector('#inputTanggal').value; 
    let inputNoReferensi = this._elementRef.nativeElement.querySelector('#inputNoReferensi').value; 
    let inputNoRekeningDebit = this._elementRef.nativeElement.querySelector('#inputNoRekeningDebit').value; 
    let inputNilaiDebit = this._elementRef.nativeElement.querySelector('#inputNilaiDebit').value; 
    let inputNoRekKredit = this._elementRef.nativeElement.querySelector('#inputNoRekKredit').value; 
    let inputNilaiKredit = this._elementRef.nativeElement.querySelector('#inputNilaiKredit').value; 
    let inputNilaiEkuivalen = this._elementRef.nativeElement.querySelector('#inputNilaiEkuivalen').value; 
    let InputKeterangan = this._elementRef.nativeElement.querySelector('#InputKeterangan').value; 
    console.log( inputTanggal,inputNoReferensi,inputNoRekeningDebit,inputNilaiDebit,inputNoRekKredit,inputNilaiKredit,inputNilaiEkuivalen,InputKeterangan)   ;
  }


}
