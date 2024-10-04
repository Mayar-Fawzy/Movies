import { Component } from '@angular/core';

import { MoviesserviesService } from '../moviesservies.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})

export class TvComponent {
[x: string]: any;
count: number =1;
  imgprefix:string=`https://image.tmdb.org/t/p/original`;
  resultTv:any[]=[];
    constructor(private _MovieServies:MoviesserviesService){}
    ngOnInit(): void {
      this._MovieServies.getTrending('tv').subscribe((response) =>{
        this.resultTv=response.results;})
      
       
      }
    // In your component.ts file
navigateToAnotherPage() {
  this.count++
  this._MovieServies.AnotherPage('tv',this.count).subscribe((response) =>{
    this.resultTv=response.results;;})

}
navigateToPreviosPage(){
  this.count--
  this._MovieServies.AnotherPage('tv',this.count).subscribe((response) =>{
    this.resultTv=response.results;;})
}
}