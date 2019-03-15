import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpserviceService } from 'src/app/service/ipservice.service';
import { interval } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { MasterBranchService } from 'src/app/service/masterbranch.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  offline: boolean;
  userid: string;
  branchName: string;
  branchCode: number;
  myIp: string;
  tanggal = Date.now();
  lastlogin: string;

  constructor(
    private router: Router,
    private ipservice: IpserviceService,
    private userService: UserService,
    private branchService: MasterBranchService) {
    this.userid = JSON.parse(localStorage.getItem('user')).userid;
    this.branchCode = JSON.parse(localStorage.getItem('user')).branchcode;
  }
  //  asdasd
  ngOnInit() {
    this.getIp();
    this.getUserLog();
    this.getBranchById();
    interval(10000).subscribe(() => {
      this.getIp();
    });
  }

  logout() {

    this.userService.logout(this.userid)
      .subscribe(() => {
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['/login']);
      });

  }

  getIp() {
    this.ipservice.getIpAddress()
      .subscribe(data => {
        this.myIp = data['ip'];
        this.offline = true;
      },
        () => {
          this.offline = false;
          this.myIp = '127.0.0.1';
        }
      );
  }

  getUserLog() {
    // console.log("user lgo run", this.userid);
    this.userService.getUserLog(this.userid).subscribe(resp => {
      this.lastlogin = resp[0].lastlogin;
      console.log(resp);
      // var lastlogout = resp[0].lastlogout;
      // console.log("last login : ", this.lastlogin);
    });
  }

  getBranchById() {
    console.log('branch run', this.branchCode);
    this.branchService.getBranchById(this.branchCode).subscribe(resp => {
      console.log(resp);
      this.branchName = resp[0].name;
    });
  }

}
