import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pembuatan-nasabah-baru',
  templateUrl: './pembuatan-nasabah-baru.component.html',
  styleUrls: ['./pembuatan-nasabah-baru.component.css']
})
export class PembuatanNasabahBaruComponent implements OnInit {

  selected = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    // console.log('asdasd');
    // console.log(this.selected);
    if (this.selected === 'option1') {
      this.router.navigate(['/nasabah/buatnasabahcorporate']);
    } else {
      this.router.navigate(['/nasabah/buatnasabahindividual']);
    }
  }
}
