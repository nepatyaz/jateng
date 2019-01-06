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
  users$: Object
  results = ''
  pesan

  @ViewChild('basicModal') basicModal: ModalDirective;

  constructor(private router: Router, private userData: AuthService) { }

  ngOnInit() {
    //ini file projek yang lagi dikerjakan
   
  }


  loginUser(event) {
    event.preventDefault();
    //console.log(event);
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    console.log(username + " - " + password)
    this.userData.getUserDetail(username, password)
      .subscribe(data => {
        if (data.status) {
          //redirect
          console.log(data.status)
          if (data.status === 'OK') {
            console.log(data.status)
            this.router.navigate(['/dashboard'])
          
            //this.otentifikasi.setLoggedIn(true)
          } else {
            this.pesan = data.message
            //window.alert(data.message)
          }
        } else {
          //window.alert(data.message)
          this.pesan = data.message
            
        }
      })

  }

}
