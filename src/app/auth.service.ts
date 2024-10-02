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
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/auth`
  constructor(private _HttpClient:HttpClient,private _Router:Router) {

    //لو اليوزر عمل ريفرش مش هينادي الداتا تاني
    if(localStorage.getItem('userToken')!=null){
        //لسه في داتا ف ال localstorgeكده لسه في متعملش ريفرش لان اول ما الصفحه تحمل ال كونستراكتور بيشتغل داتا
        this.serUserData() 
    }
   }
    serUserData():void{
      //فكيت تشفير ال token
      let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
      let decodedToken:any=jwtDecode(encodedToken);
     this.userData.next(decodedToken);
    }

  register(userdata:Users):Observable<any>
  {
  return  this._HttpClient.post(`${this.baseUrl}/signup`,userdata)
  }
  Login(userdata:object):Observable<any>
  {
    return  this._HttpClient.post(`${this.baseUrl}/signin`,userdata)
  }
  ForgetPassword(userdata:object):Observable<any>
  {
    return  this._HttpClient.post(`${this.baseUrl}/forgotPasswords`,userdata)
  }
  ResetPassword(userdata:object):Observable<any>
  {
    return  this._HttpClient.post(`${this.baseUrl}/resetPassword`,userdata)
  }
  ResetCode(userdata:object):Observable<any>
  {
    return  this._HttpClient.post(`${this.baseUrl}/verifyResetCode`,userdata)
  }
  logOut():void{
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['login'])
  }
}
