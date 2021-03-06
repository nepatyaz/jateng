import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-pembuatan-nasabah-baru',
  templateUrl: './pembuatan-nasabah-baru.component.html',
  styleUrls: ['./pembuatan-nasabah-baru.component.css']
})
export class PembuatanNasabahBaruComponent implements OnInit {

  validatingForm: FormGroup;

  selected: string;
  favoriteOption: string;
  options: string[] = ['Kode Nasabah', 'Kode Cabang', 'No Kartu', 'No Identitas', 'Alamat', 'Nasabah'];
  opsi: string;



  constructor(private router: Router, private _elementRef: ElementRef) { }

  ngOnInit() {
    this.validatingForm = new FormGroup(
      {
        inputTanggal: new FormControl(null, Validators.required),
        inputCari: new FormControl(null, Validators.required),
      }
    );
    console.log(this.opsi);
  }

  get inputCari() { return this.validatingForm.get('inputCari'); }
  get inputTanggal() { return this.validatingForm.get('inputTanggal'); }

  proses() {

    this.selected = this._elementRef.nativeElement.querySelector('#choosenValue').value;
    console.log(this.selected);
    if (this.selected === 'coorporate') {
      this.router.navigate(['/nasabah/pembuatan-nasabah-baru/duplikat-nasabah']);
    } else {
      this.router.navigate(['/nasabah/pembuatan-nasabah-baru/duplikat-individu']);
    }
  }

  chooseValue() {
    console.log(this.selected = this._elementRef.nativeElement.querySelector('#choosenValue').value);
  }

  cariFunction(value) {
    console.log(value);
    console.log(this.favoriteOption);
  }



  radioChoosen(value) {
    console.log(value);
  }

}
