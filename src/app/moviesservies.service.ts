import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesserviesService {
 
  constructor(private _HttpClient:HttpClient) { }
  getTrending(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=2dc4f3b7280c70e5009487448e8c74f4`)
  }
  getDetails(mediaType:string,id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=2dc4f3b7280c70e5009487448e8c74f4`)
  }
  AnotherPage(mediaType:string,count:number):Observable<any>{
    
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=2dc4f3b7280c70e5009487448e8c74f4&page=${count}`)
  }
}
