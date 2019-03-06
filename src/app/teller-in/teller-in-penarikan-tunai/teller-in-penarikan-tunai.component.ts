import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Fotos } from '../../model/mock-foto';


@Component({
  selector: 'app-teller-in-penarikan-tunai',
  templateUrl: './teller-in-penarikan-tunai.component.html',
  styleUrls: ['./teller-in-penarikan-tunai.component.css']
})
export class TellerInPenarikanTunaiComponent implements OnInit {
  tanggal = Date.now();
  pasFoto 
  tandaTangan
  isSPV : boolean = false;

  foto = Fotos;

  validatingForm : FormGroup;


  @ViewChild('modalKonfirmasi') modalKonfirmasi: ModalDirective;
  @ViewChild('modalSucces') modalSucces: ModalDirective;
  @ViewChild('modalFoto') modalFoto: ModalDirective;
  @ViewChild('modalSPV') modalSPV: ModalDirective;

  constructor(private element : ElementRef, private route : Router) {}
  ngOnInit() {
    this.form();
    
    this.pasFoto = this.foto[0].data
    this.tandaTangan = this.foto[1].data
  }

  form(){
    this.validatingForm = new FormGroup(
      {
        nilaiTransaksi: new FormControl(null, [Validators.required, Validators.min(10000)]),
        noRekening : new FormControl(null, [Validators.required, Validators.min(100000)]),
        noReferensi : new FormControl(null, [Validators.required, Validators.min(10000)])
      }
    )
  }

  get inputRekening() { return this.validatingForm.get('noRekening'); }
  get inputNilai() { return this.validatingForm.get('nilaiTransaksi'); }
  get inputReferensi() { return this.validatingForm.get('noReferensi'); }

  formSubmit() { 
    // //buat variabel untuk menyimpan nilai/value dari setiap id komponen form
    let nilaiTransaksi = this.element.nativeElement.querySelector('#nilaiTransaksi').value
    let mystring = nilaiTransaksi.replace(/\./g,'')
    let string2 = parseFloat(mystring.substring(3));
    if(string2 > 100000000){
      console.log("nilainya lebih dari seratus juta");
      this.isSPV = true;
    }else {
      this.isSPV = false;
    }
    this.modalKonfirmasi.show();
  }

  validasiFoto(){
    this.modalFoto.show();
  }

  validasiSucces(){
    this.modalSPV.hide();
    this.modalSucces.show();
    setTimeout(()=>{ this.route.navigate(['/'])}, 5000)
  }

  validasiSPV(){
    this.modalFoto.hide();
    this.modalSPV.show();
  }

}
