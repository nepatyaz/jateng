import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  pesanLogin
  
  @ViewChild('basicModal') basicModal: ModalDirective;

  constructor(private router: Router, private userData: AuthService) { }

  ngOnInit() {}

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
    this.userData.getUserDetail(username, password)
      //subscribe hasil fungsi ke dalam data
      .subscribe(data => {
        //cek hasil proses fungsi , apakah telah mendapatkan nilai
        //jika bernilai true jalankan kode
        if (data.status) {
          //redirect
          //console.log(data.status)
          //jika hasil rest dari proses bernilai 'OK' jalankan fungsi router
          //dan arahkan ke halaman dashboard
          if (data.status === 'OK') {
            //redirect ke halaman redirect
            console.log(data.status);
            console.log(data.message)
            //set session storage untuk menyimpan data session
            var status: string = String(data.status)
            var role: string = String(data.role)
            sessionStorage.setItem('status', status)
            sessionStorage.setItem('role', role)
            sessionStorage.setItem('isLoggedIn', "true");

            this.router.navigate(['/dashboard']);
            //this.otentifikasi.setLoggedIn(true)
          } else {
            //jika hasil pengembalian dari nilai bukan 'ok'
            //tampilkan komponen modal
            this.basicModal.show()
            // simpan hasil value dari pengembalian nilai dari data kedalam variabel
            this.pesanLogin = data.message
            //window.alert(data.message)
          }
        } else {
          //jika nilai pengembalian dari fungsi tidak ada atau false
          //tampilkan komponen modal
          this.basicModal.show()
          //window.alert(data.message)
          // simpan hasil value dari pengembalian nilai dari data kedalam variabel
          this.pesanLogin = data.message
        }
      })
  }
}