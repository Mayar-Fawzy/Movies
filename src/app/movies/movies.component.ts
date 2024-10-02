import { Component } from '@angular/core';
import { MoviesserviesService } from '../moviesservies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
[x: string]: any;
count: number =1;
  imgprefix:string=`https://image.tmdb.org/t/p/original`;
  resultMovie:any[]=[];
    constructor(private _MovieServies:MoviesserviesService){}
    ngOnInit(): void {
      this._MovieServies.getTrending('movie').subscribe((response) =>{
        this.resultMovie=response.results;})
      
       
      }
    // In your component.ts file
navigateToAnotherPage() {
  this.count++
  this._MovieServies.AnotherPage('movie',this.count).subscribe((response) =>{
    this.resultMovie=response.results;;})

}
navigateToPreviosPage(){
  this.count--
  this._MovieServies.AnotherPage('movie',this.count).subscribe((response) =>{
    this.resultMovie=response.results;;})
}
}