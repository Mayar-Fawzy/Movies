import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesserviesService } from '../moviesservies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent {
  imgprefix:string=`https://image.tmdb.org/t/p/original`;
   id:string='';
   backgroundImageUrl:string='';
   movieDetails:any={}
   constructor(private _ActivateRoute:ActivatedRoute ,private _MoviesServies:MoviesserviesService){
    this.id=_ActivateRoute.snapshot.params['id'];
   
   }
  ngOnInit(): void {
    this._MoviesServies.getDetails('movie',this.id).subscribe((res)=>{
          this.movieDetails=res;
          this.backgroundImageUrl = this.imgprefix + res.backdrop_path;
          console.log(this.backgroundImageUrl);
    })
  }
}
