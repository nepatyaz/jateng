import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public siteUrl = window.location.href;
  public isDashboard = false;

  constructor() { }

  ngOnInit() {
    if (this.siteUrl.search("dashboard") == -1 ) {
      this.isDashboard = false;
    } else {
      this.isDashboard = true;
    }

  }

}
