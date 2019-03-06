import { Component, OnInit, ElementRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-teller-in-selisih-kas',
  templateUrl: './teller-in-selisih-kas.component.html',
  styleUrls: ['./teller-in-selisih-kas.component.css']

})
export class TellerInSelisihKasComponent implements OnInit {
  tanggal = Date.now();

  //variabel currency
  currency : string;

  //variabel modal 
  Tanggal : string
  noReferensi : string
  mataUang : string
  jumlahTransaksi : string 
  keterangan : string

  //variabel form
  validatingForm: FormGroup;

  
  @ViewChild('modalKonfirmasi') modalKonfirmasi: ModalDirective;

  constructor(private _elementRef: ElementRef, private cd: ChangeDetectorRef) { }
  ngOnInit() {
    this.validatingForm = new FormGroup(
      {
        mataUang: new FormControl(null, Validators.required),
        nilaiTransaksi: new FormControl(null, [Validators.required, Validators.min(10000)]),
      }
    );

    this.validatingForm.get('mataUang').valueChanges.subscribe(
      (value: string) => {
        this.currency = value;

        switch (value) {
          case "idr": {
            this.validatingForm.get('nilaiTransaksi').setValidators([Validators.required, Validators.min(10000)]);
            break;
          }
          case "usd": {
            this.validatingForm.get('nilaiTransaksi').setValidators([Validators.required, Validators.min(1)]);
            break;
          }
          case "yen": {
            this.validatingForm.get('nilaiTransaksi').setValidators([Validators.required, Validators.min(1)]);
            break;
          }
          default: {
            this.validatingForm.get('nilaiTransaksi').setValidators([Validators.required, Validators.min(10)]);
            break;
          }
        }
        this.cd.detectChanges();
      }
    )

  }

  get inputMataUang() { return this.validatingForm.get('mataUang'); }
  get nilaiTransaksi() { return this.validatingForm.get('nilaiTransaksi'); }


  proses() {
    // console.log("Proses Berjalan");
    this.Tanggal = this._elementRef.nativeElement.querySelector('#inputTanggal').value;
    this.noReferensi = this._elementRef.nativeElement.querySelector('#inputNoReferensi').value;
    this.mataUang = this._elementRef.nativeElement.querySelector('#MataUang').value;
    this.jumlahTransaksi = this._elementRef.nativeElement.querySelector('#nilaiTransaksi').value;
    this.keterangan = this._elementRef.nativeElement.querySelector('#inputKeterangan').value;
    this.modalKonfirmasi.show();
    // console.log(inputTanggal, inputNoReferensi, MataUang, nilaiTransaksi, inputKeterangan);
  }


}
