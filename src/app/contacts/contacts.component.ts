
import { Component } from '@angular/core';

import { MoviesserviesService } from '../moviesservies.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})



export class ContactsComponent {
[x: string]: any;
count: number =1;
  imgprefix:string=`https://image.tmdb.org/t/p/original`;
  resultPerson:any[]=[];
    constructor(private _MovieServies:MoviesserviesService){}
    ngOnInit(): void {
      this._MovieServies.getTrending('person').subscribe((response) =>{
        this.resultPerson=response.results;})
      
       
      }
    // In your component.ts file
navigateToAnotherPage() {
  this.count++
  this._MovieServies.AnotherPage('person',this.count).subscribe((response) =>{
    this.resultPerson=response.results;;})

}
navigateToPreviosPage(){
  this.count--
  this._MovieServies.AnotherPage('person',this.count).subscribe((response) =>{
    this.resultPerson=response.results;;})
}
}