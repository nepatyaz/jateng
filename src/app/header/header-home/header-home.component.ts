import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpserviceService } from 'src/app/service/ipservice.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {
  counter
  myIp: string;
  tanggal = Date.now();
  constructor(private router: Router, private ipservice: IpserviceService) { }

  ngOnInit() {

    interval(10000).subscribe(() => {
      this.ipservice.getIpAddress()
        .subscribe(data => {
          this.myIp = data['ip'];
        },
          err => {
            this.myIp = "127.0.0.1";
          }
        )
    })



  }

  fungsi() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
