import { Component } from '@angular/core';
import {FormGroup, FormControl ,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
   

  errorpassword:string='';
  errorr:string='';
 
  constructor(private _AuthService:AuthService  ,private _router:Router){}
  registerfform:FormGroup=new FormGroup({
     
      name:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
      email:new FormControl(null ,[Validators.required,Validators.email]),
      password:new FormControl(null ,[Validators.required, Validators.pattern(/^[0-9a-z]{6,}/)]),
      phone:new FormControl(null ,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
      rePassword:new FormControl(null ,[Validators.required, Validators.pattern(/^[0-9a-z]{6,}/)])
     });

     SbmitRegister(forminfo:FormGroup)
     {
         
      this._AuthService.register(forminfo.value).subscribe((response)=>{
      if(response.message === "success"){
          this._router.navigate(['/login']);
        }
      },
    (error) => {
      if (error.status === 409) {
        alert("User already exists");
      }
      this.errorpassword=error.error.errors.msg;
     
    }
  )}
 

  }
   

