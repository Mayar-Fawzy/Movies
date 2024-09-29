import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  register(userdata:Users):Observable<any>
  {
  return  this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userdata)
  }
  Login(userdata:object):Observable<any>
  {
    return  this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userdata)
  }
}
