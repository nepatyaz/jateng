import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duplikat-nasabah',
  templateUrl: './duplikat-nasabah.component.html',
  styleUrls: ['./duplikat-nasabah.component.css']
})
export class DuplikatNasabahComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  prosesHalaman() {
    this.router.navigate(['/nasabah/pencarian-nasabah-perusahaan']);
  }

}

