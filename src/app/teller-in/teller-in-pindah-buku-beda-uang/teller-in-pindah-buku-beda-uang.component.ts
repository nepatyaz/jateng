import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-teller-in-pindah-buku-beda-uang',
  templateUrl: './teller-in-pindah-buku-beda-uang.component.html',
  styleUrls: ['./teller-in-pindah-buku-beda-uang.component.css']
})
export class TellerInPindahBukuBedaUangComponent implements OnInit {

  minDate = new Date();;
  maxDate = new Date(2020, 0, 1);

  validatingForm: FormGroup;

  //modal variabel 
  Tanggal: string
  NoReferensi: string
  NoRekeningDebit: string
  NilaiDebit: string
  NoRekKredit: string
  NilaiKredit:  string
  NilaiEkuivalen: string
  Keterangan: string





  @ViewChild('modalKonfirmasi') modalKonfirmasi: ModalDirective;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
    this.validatingForm = new FormGroup(
      {

        inputTanggal: new FormControl(null, Validators.required),
        inputNoRekeningDebit: new FormControl(null, [Validators.required, Validators.min(100000),]),
        inputNilaiDebit: new FormControl(null, [Validators.required, Validators.min(10000)]),
        inputNoRekKredit: new FormControl(null, [Validators.required, Validators.min(100000)]),
        inputNilaiKredit: new FormControl(null, [Validators.required, Validators.min(10000)]),
        inputNilaiEkuivalen: new FormControl(null, [Validators.required, Validators.min(100)]),

      }
    );
  }

  get inputTanggal() { return this.validatingForm.get('inputTanggal'); }
  get inputNoRekeningDebit() { return this.validatingForm.get('inputNoRekeningDebit'); }
  get inputNilaiDebit() { return this.validatingForm.get('inputNilaiDebit'); }
  get inputNoRekKredit() { return this.validatingForm.get('inputNoRekKredit'); }
  get inputNilaiKredit() { return this.validatingForm.get('inputNilaiKredit'); }
  get inputNilaiEkuivalen() { return this.validatingForm.get('inputNilaiEkuivalen'); }


  proses() {
    this.Tanggal = this._elementRef.nativeElement.querySelector('#inputTanggal').value;
    this.NoReferensi = this._elementRef.nativeElement.querySelector('#inputNoReferensi').value;
    this.NoRekeningDebit = this._elementRef.nativeElement.querySelector('#inputNoRekeningDebit').value;
    this.NilaiDebit = this._elementRef.nativeElement.querySelector('#inputNilaiDebit').value;
    this.NoRekKredit = this._elementRef.nativeElement.querySelector('#inputNoRekKredit').value;
    this.NilaiKredit = this._elementRef.nativeElement.querySelector('#inputNilaiKredit').value;
    this.NilaiEkuivalen = this._elementRef.nativeElement.querySelector('#inputNilaiEkuivalen').value;
    this.Keterangan = this._elementRef.nativeElement.querySelector('#InputKeterangan').value;
    // console.log(inputTanggal, inputNoReferensi, inputNoRekeningDebit, inputNilaiDebit, inputNoRekKredit, inputNilaiKredit, inputNilaiEkuivalen, InputKeterangan);
    this.modalKonfirmasi.show();
  }


}
