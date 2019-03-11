import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpserviceService } from 'src/app/service/ipservice.service';


@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {
  myIp : string;
  tanggal = Date.now();
  constructor(private router: Router, private ipservice : IpserviceService) { }

  ngOnInit() {
    this.ipservice.getIpAddress()
    .subscribe(data=>{
      this.myIp = data['ip'];
      console.log(data);
    })
  }

  fungsi() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
