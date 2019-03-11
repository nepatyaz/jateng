import { Component, OnInit, ElementRef, ChangeDetectorRef , ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-change-offline-limit',
  templateUrl: './change-offline-limit.component.html',
  styleUrls: ['./change-offline-limit.component.css']
})
export class ChangeOfflineLimitComponent implements OnInit {

  offlineValue : string;
  formValidation: FormGroup;

  @ViewChild('modalKonfirmasi') modalKonfirmasi: ModalDirective;
  @ViewChild('modalSucces') modalSucces: ModalDirective;

    constructor(private _elementRef: ElementRef, private router : Router) { }

  ngOnInit() {
    this.formValidation = new FormGroup( 
      {
        inputLimit: new FormControl(null,[Validators.required, Validators.min(10000)]),
      }
    );
  }

  get inputNilai() { return this.formValidation.get('inputLimit'); }

  proses() {
    this.offlineValue = this._elementRef.nativeElement.querySelector('#inputLimit').value;
    console.log(this._elementRef.nativeElement.querySelector('#inputLimit').value);
    this.modalKonfirmasi.show();
  }

  prosesKonfirmasi(){
    this.modalSucces.show();
    setTimeout(()=>{ 
      
      this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
      this.router.navigate(["administrative/changeoffline"]));

    }, 1000);
  }
}
