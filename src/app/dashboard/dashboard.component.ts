import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  id : string

  constructor(private _location : Location) { }

  ngOnInit() {
    //this.id = localStorage.getItem('status');
    //this.id = sessionStorage.getItem('status')
    //console.log(this.id);
    
  }

}
