import { Component, OnInit , ElementRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      nilaiTransaksi: new FormControl(null, [Validators.required, Validators.min(10000), Validators.max(999999999999)]),
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

  ChangingValue(value : string){
  
    console.log(value)

  }


}
