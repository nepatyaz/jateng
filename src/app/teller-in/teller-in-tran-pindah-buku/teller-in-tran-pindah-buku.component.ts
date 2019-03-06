import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { Fotos } from '../../model/mock-foto';

@Component({
  selector: 'app-teller-in-tran-pindah-buku',
  templateUrl: './teller-in-tran-pindah-buku.component.html',
  styleUrls: ['./teller-in-tran-pindah-buku.component.css']
})
export class TellerInTranPindahBukuComponent implements OnInit {
  validatingForm: FormGroup;

  isSPV
  pasFoto
  tandaTangan
  minLength

  foto = Fotos;

  minDate = new Date();;
  maxDate = new Date(2020, 0, 1);

  @ViewChild('modalSwipe') modalSwipe: ModalDirective;
  @ViewChild('modalFoto') modalFoto: ModalDirective;
  @ViewChild('modalSucces') modalSucces: ModalDirective;
  @ViewChild('modalSPV') modalSPV: ModalDirective;

  constructor(private _elementRef: ElementRef, private route: Router) { }

  ngOnInit() {
    this.validatingForm = new FormGroup(
      {
        tanggal: new FormControl(null, Validators.required),
        rekeningDebit: new FormControl(null, [Validators.required, Validators.min(100000)]),
        rekeningKredit: new FormControl(null, [Validators.required, Validators.min(100000)]),
        nilaiTransaksi: new FormControl(null, [Validators.required, Validators.min(10000)])
      }
    );

    this.pasFoto = this.foto[0].data
    this.tandaTangan = this.foto[1].data


    this.compare()
  }

  get inputTanggal() { return this.validatingForm.get('tanggal'); }
  get inputRekDebit() { return this.validatingForm.get('rekeningDebit'); }
  get inputRekKredit() { return this.validatingForm.get('rekeningKredit'); }
  get inputNilai() { return this.validatingForm.get('nilaiTransaksi'); }

  validasiSwipe() {

    let nilaiTransaksi = this._elementRef.nativeElement.querySelector('#nilaiTransaksi').value
    let mystring = nilaiTransaksi.replace(/\./g, '')
    let string2 = parseFloat(mystring.substring(3));

    if (string2 > 100000000) {
      console.log("nilainya lebih dari seratus juta");
      this.isSPV = true;
    } else {
      this.isSPV = false
    }

    this.modalSwipe.show()
  }

  validasiFoto() {
    //buat variabel untuk menyimpan nilai/value dari setiap id komponen form
    let domElement = this._elementRef.nativeElement.querySelector('#inputPin').value;
    console.log(domElement);
    console.log("isi : ", this.minLength)
    this.minLength = ""
    console.log("isi clear : ", this.minLength)
    this.modalFoto.show();
  }

  validasiSucces() {
    this.modalSucces.show()
    setTimeout(() => { this.route.navigate(['/']) }, 5000)
  }

  validasiSPV(){
    this.modalSPV.show();

  }

  compare() {
    var img = document.createElement('img');
    var canvas = document.createElement('canvas');

    console.log('testing');

    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      // callback(ctx.getImageData(0, 0, img.width, img.height));
    };

  }



}
