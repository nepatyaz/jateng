import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-teller-in-setoran-tunai',
  templateUrl: './teller-in-setoran-tunai.component.html',
  styleUrls: ['./teller-in-setoran-tunai.component.css']
})
export class TellerInSetoranTunaiComponent implements OnInit {
  // validatingForm: FormGroup;

  constructor() { }

  ngOnInit() {
    // this.validatingForm = new FormGroup({
    //   minLength: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    //   maxLength: new FormControl(null, [Validators.required, Validators.maxLength(6)])
    // });
  }

  // get input() { return this.validatingForm.get('minLength'); }

  test(){
    console.log("ABCDG");
  }

}
