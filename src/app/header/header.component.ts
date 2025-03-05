import { Component, Input } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesserviesService } from '../moviesservies.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class     HeaderComponent
{
 
  backgroundImageUrl: string ="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg";
   nameFilmes:string ="The Union"
  imgprefix:string=`https://image.tmdb.org/t/p/original`;
  
  @Input() headerTrendingMovie:any[]=[];  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      100: {
        items: 3
      },
      200: {
        items: 3
      },
      300: {
        items: 3
      },
      400: {
        items: 4
      },
      
      740: {
        items: 5
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  changeBackground(imageUrl: string , name:string): void {
    this.backgroundImageUrl = imageUrl;
    this.nameFilmes = name;
  }

}