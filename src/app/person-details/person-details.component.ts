
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesserviesService } from '../moviesservies.service';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})


export class PersonDetailsComponent {
  imgprefix:string=`https://image.tmdb.org/t/p/original`;
   id:string='';
   backgroundImageUrl:string='';
   personDetails:any={}
   constructor(private _ActivateRoute:ActivatedRoute ,private _MoviesServies:MoviesserviesService){
    this.id=_ActivateRoute.snapshot.params['id'];
   
   }
  ngOnInit(): void {
    this._MoviesServies.getDetails('person',this.id).subscribe((res)=>{
          this.personDetails=res;
         
          console.log(this.backgroundImageUrl);
    })
  }
}
