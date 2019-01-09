import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: ` <div class="stars" style="margin-top:15vh;">
  <div class="central-body">
      <img class="image-404" src="assets/image/404.png" width="300px">
      <a href="/" class="btn-go-home" target="_blank">Kembali</a>
  </div>
  <div class="objects">
      <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px">
      <div class="earth-moon">
          <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px">
          <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px">
      </div>
      <div class="box_astronaut">
          <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px">
      </div>
  </div>
</div>
  `,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
