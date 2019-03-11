import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpserviceService } from 'src/app/service/ipservice.service';
import { interval } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {
  offline:boolean;
  myIp: string;
  tanggal = Date.now();
  lastlogin : string;
  constructor(private router: Router, private ipservice: IpserviceService, private userService : UserService) { 
    // console.log(JSON.parse(localStorage.getItem('user')));
    this.lastlogin = JSON.parse(localStorage.getItem('user')).lastlogin;
    console.log(this.lastlogin);
  }

  ngOnInit() {
    this.getIp();
    this.getUserLog();
    interval(10000).subscribe(() => {
      this.getIp();
    })
  }

  fungsi() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  getIp(){
    this.ipservice.getIpAddress()
    .subscribe(data => {
      this.myIp = data['ip'];
      this.offline = true;
    },
      () => {
        this.offline = false;
        this.myIp = "127.0.0.1";
      }
    )
  }

  getUserLog(){
    // console.log(JSON.parse(localStorage.getItem('user')).userid)
    var userid = JSON.parse(localStorage.getItem('user')).userid;
    console.log("user lgo run", userid);
    this.userService.getUserLog(userid).subscribe(resp=>{
      console.log(resp);
    });
  }

}
