import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from './users';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  userData=new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }
    serUserData():void{
      //فكيت تشفير ال token
      let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
      let decodedToken:any=jwtDecode(encodedToken);
     this.userData.next(decodedToken);
    }

  register(userdata:Users):Observable<any>
  {
  return  this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userdata)
  }
  Login(userdata:object):Observable<any>
  {
    return  this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userdata)
  }
  logOut():void{
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['login'])
  }
}
