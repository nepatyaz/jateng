import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';



@Component({
  selector: 'app-teller-in-setoran-tunai',
  templateUrl: './teller-in-setoran-tunai.component.html',
  styleUrls: ['./teller-in-setoran-tunai.component.css']
})
export class TellerInSetoranTunaiComponent implements OnInit {
  // validatingForm: FormGroup;

  @ViewChild('modalSucces') modalSucces: ModalDirective;
  @ViewChild('modalFoto') modalFoto: ModalDirective;

  constructor(private router : Router) { }

  ngOnInit() {
  }


  validasiSucces(){
    this.modalSucces.show();
    setTimeout(()=>{ this.router.navigate(['/'])}, 5000)

  }
  validasiFoto(){
    this.modalFoto.show();
    
  }

}
