import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  userData:any;

  constructor(private _HttpClient:HttpClient) { }
    serUserData():void{
      //فكيت تشفير ال token
      let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
      let decodedToken=jwtDecode(encodedToken);
      this.userData=decodedToken;
    }

  register(userdata:Users):Observable<any>
  {
  return  this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userdata)
  }
  Login(userdata:object):Observable<any>
  {
    return  this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userdata)
  }
}
