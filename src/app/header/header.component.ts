import { Component, Input } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class     HeaderComponent
{
  imgprefix:string=`https://image.tmdb.org/t/p/original`;
  @Input() headerTrendingMovie:any[]=[];  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
}