import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teller-in-penarikan-tunai',
  templateUrl: './teller-in-penarikan-tunai.component.html',
  styleUrls: ['./teller-in-penarikan-tunai.component.css']
})
export class TellerInPenarikanTunaiComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  formSubmit(event) {
    event.preventDefault();
    //buat variabel untuk menyimpan nilai value dari form login
    const target = event.target
    // //buat variabel untuk menyimpan nilai/value dari setiap id komponen form
    const rekening = target.querySelector('#rekening').value
    var nilaiTransaksi = target.querySelector('#nilaiTransaksi').value
    var mystring = nilaiTransaksi.replace(/\./g,'')
    var string2 = parseFloat(mystring.substring(3));
    if(string2 > 100000000){
      console.log("nilainya lebih dari seratus juta");
    }else {
      
    }
    
  }

}
