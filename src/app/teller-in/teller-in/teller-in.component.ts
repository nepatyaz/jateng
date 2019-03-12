import { Component, OnInit, ElementRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-teller-in',
  templateUrl: './teller-in.component.html',
  styleUrls: ['./teller-in.component.css']
})
export class TellerInComponent implements OnInit {

  tanggal = Date.now();
  currency: string;
  validatingForm: FormGroup;

  @ViewChild('modalKonfirmasi') modalKonfirmasi: ModalDirective;

  //modal variable 
  referensi: string;
  kurs: string;
  jumlah: string;
  keterangan: string;

  constructor(private _elementRef: ElementRef, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.validatingForm = new FormGroup(
      {
        nilaiTransaksi: new FormControl(),
        mataUang: new FormControl(null, Validators.required),
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



  get inputNilai() { return this.validatingForm.get('nilaiTransaksi'); }
  get inputMataUang() { return this.validatingForm.get('mataUang'); }


  proses() {
    console.log("Proses Berjalan");
    let NilaiTransaksi = this._elementRef.nativeElement.querySelector('#nilaiTransaksi').value;
    let MataUang = this._elementRef.nativeElement.querySelector('#MataUang').value;
    let TglValuta = this._elementRef.nativeElement.querySelector('#TglValuta').value;
    let NoReferensi = this._elementRef.nativeElement.querySelector('#NoReferensi').value;
    let Keterangan = this._elementRef.nativeElement.querySelector('#Keterangan').value;
    console.log(NilaiTransaksi, MataUang, TglValuta, NoReferensi, Keterangan);

    this.jumlah = NilaiTransaksi;
    this.kurs = MataUang;
    this.tanggal = TglValuta;
    this.referensi = NoReferensi;
    this.keterangan = Keterangan;

    this.modalKonfirmasi.show();
  }

  Cetak(){
    
    const printContent = document.getElementById("cetak");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=700,height=700,toolbar=0,scrollbars=0,status=0');
   
    setTimeout(function() {
      
      WindowPrt.document.write(printContent.innerHTML);
      WindowPrt.document.close();

      setTimeout(function() {
        WindowPrt.focus();
        WindowPrt.print();
        WindowPrt.close();
      },500);

  }, 500);
  }


}
