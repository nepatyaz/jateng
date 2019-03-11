import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  pesanLogin

  @ViewChild('basicModal') basicModal: ModalDirective;

  constructor(private router: Router, private userData: AuthentificationService) { }

  ngOnInit() { }

  loginUser(event) {
    event.preventDefault();
    //buat variabel untuk menyimpan nilai value dari form login
    const target = event.target
    //buat variabel untuk menyimpan nilai/value dari setiap id komponen form
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    //console.log(username + " - " + password)
    //jalankan fungsi dari servis auth yang bernama getuserdetail
    //kirim juga nilai dari form yang sudah disimpan oleh ke variabel ke dalam parameter fungsi
    if(username !== "" && password !== ""){
      this.userData.Login(username, password)
      //subscribe hasil fungsi ke dalam data
      .subscribe(data => {
        //cek hasil proses fungsi , apakah telah mendapatkan nilai
        //jika bernilai true jalankan kode
        console.log(data['status']);
        if (data['status']) {
          //redirect
          console.log(data)
          if (data['status'] === 'ok') {

            // console.log(data['status']);
            localStorage.setItem("userinfo", JSON.stringify(data));
            sessionStorage.setItem('isLoggedIn', "true");
            this.router.navigate(['/dashboard']);

          } else {
            //jika hasil pengembalian dari nilai bukan 'ok'
            //tampilkan komponen modal
            this.basicModal.show()
            // simpan hasil value dari pengembalian nilai dari data kedalam variabel
            this.pesanLogin = data['message']
          }
        } else {
          //jika nilai pengembalian dari fungsi tidak ada atau false
          //tampilkan komponen modal
          this.basicModal.show()
          // simpan hasil value dari pengembalian nilai dari data kedalam variabel
          this.pesanLogin = data['message']
        }
      })
    }else{
      this.basicModal.show();
      this.pesanLogin = "Mohon Inputkan Username & Password";
    }
    
  }
}