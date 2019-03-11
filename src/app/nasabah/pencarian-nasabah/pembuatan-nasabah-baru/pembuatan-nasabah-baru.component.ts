import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-pembuatan-nasabah-baru',
  templateUrl: './pembuatan-nasabah-baru.component.html',
  styleUrls: ['./pembuatan-nasabah-baru.component.css']
})
export class PembuatanNasabahBaruComponent implements OnInit {

  validatingForm: FormGroup;

  selected = '';
  favoriteOption: string;
  options: string[] = ['Kode Nasabah', 'Kode Cabang', 'No Kartu', 'No Identitas', 'Alamat', 'Nasabah'];

  constructor(private router: Router) { }

  ngOnInit() {
    this.validatingForm = new FormGroup(
      {
        inputTanggal: new FormControl(null, Validators.required),
        inputCari: new FormControl(null, Validators.required),
      }
    );
  }

  get inputCari() { return this.validatingForm.get('inputCari'); }
  get inputTanggal() { return this.validatingForm.get('inputTanggal'); }


  onClick() {
    // console.log('asdasd');

    if (this.selected === 'option1') {
      this.router.navigate(['/nasabah/buatnasabahcorporate']);
    } else {
      this.router.navigate(['/nasabah/buatnasabahindividual']);
    }
  }

  cariFunction(value) {
    console.log(value);
    console.log(this.favoriteOption);
  }
}
