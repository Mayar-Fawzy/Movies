import { Component } from '@angular/core';
import { MoviesserviesService } from '../moviesservies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   imgprefix:string=`https://image.tmdb.org/t/p/original`;
  resultMovie:any[]=[];
  resultTv:any[]=[];
  resultPerson:any[]=[];
    constructor(private _MovieServies:MoviesserviesService){}
    ngOnInit(): void {
      //  Movie 
     this._MovieServies.getTrending('movie').subscribe((response) =>{
     this.resultMovie=response.results.slice(0,10);
    
     })
     //Tv
     this._MovieServies.getTrending('tv').subscribe((response)=>{
      this.resultTv=response.results.slice(0,10);
     
      })
      //Person
      this._MovieServies.getTrending('person').subscribe((response)=>{
        this.resultPerson=response.results.slice(0,10);
       
        })
    }

}
