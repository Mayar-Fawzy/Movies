import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesserviesService } from '../moviesservies.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})

export class TvDetailsComponent {
  imgprefix:string=`https://image.tmdb.org/t/p/original`;
   id:string='';
   backgroundImageUrl:string='';
   TvDetails:any={}
   constructor(private _ActivateRoute:ActivatedRoute ,private _MoviesServies:MoviesserviesService){
    this.id=_ActivateRoute.snapshot.params['id'];
   
   }
  ngOnInit(): void {
    this._MoviesServies.getDetails('tv',this.id).subscribe((res)=>{
          this.TvDetails=res;
          this.backgroundImageUrl = this.imgprefix + res.backdrop_path;
          console.log(this.backgroundImageUrl);
    })
  }
}
