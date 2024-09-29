import { Component } from '@angular/core';
import {FormGroup, FormControl ,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   
  errorr:string='';
 
  constructor(private _AuthService:AuthService  ,private _router:Router){}
    LoginForrm:FormGroup=new FormGroup({
     
     
      email:new FormControl(null ,[Validators.required,Validators.email]),
      password:new FormControl(null ,[Validators.required, Validators.pattern(/^[0-9a-z]{2,8}/)]),
     
     })
     SubmitLogin(forminfo:FormGroup)
     {
      this._AuthService.Login(forminfo.value).subscribe((response)=>{
        console.log(response);
      if(response.message === "success"){
          this._router.navigate(['home']);
        }
      },
    (error) => {
      if (error.status === 409) {
        alert("User already exists");
      }
    }
  )}
}
