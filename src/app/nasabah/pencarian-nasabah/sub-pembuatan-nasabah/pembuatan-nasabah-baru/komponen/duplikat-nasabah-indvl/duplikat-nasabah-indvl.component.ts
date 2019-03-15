import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duplikat-nasabah-indvl',
  templateUrl: './duplikat-nasabah-indvl.component.html',
  styleUrls: ['./duplikat-nasabah-indvl.component.css']
})
export class DuplikatNasabahIndvlComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  prosesHalaman() {
    console.log('test');
    this.router.navigate(['/nasabah/pencarian-nasabah-individu']);
  }

}
