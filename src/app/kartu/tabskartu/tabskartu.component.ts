import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabskartu',
  templateUrl: './tabskartu.component.html',
  styleUrls: ['./tabskartu.component.css']
})
export class TabskartuComponent implements OnInit {
  titleTab : string;
  tabLoad: any[] = [];

  getContent(index: number) {
    if (this.tabLoad[index] === 1) {
      this.tabLoad[index] = "<app-aktivasi></<app-aktivasi>>";
    }

    return this.tabLoad[index];
  }
  

  constructor() { }

  ngOnInit() {
  }

  title(param:string){
    console.log(param);
    this.titleTab = param;
  }

  

}
