import { Component } from '@angular/core';
import { MoviesserviesService } from '../moviesservies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   imgprefix:string=` https://image.tmdb.org/t/p/original`;
  resultMovie:any[]=[];
    constructor(private _MovieServies:MoviesserviesService){}
    ngOnInit(): void {
     this._MovieServies.getTrending('movie').subscribe((response)=>{
     this.resultMovie=response.results;
    
     })
    }
}
