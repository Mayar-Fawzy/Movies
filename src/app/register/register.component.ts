import { Component } from '@angular/core';
import {FormGroup, FormControl ,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerfform:FormGroup=new FormGroup({
      
      name:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      email:new FormControl(null ,[Validators.required,Validators.email]),
      password:new FormControl(null ,[Validators.required, Validators.pattern(/^[A-Z][a-z]{2,8}/)]),
      phone:new FormControl(null ,[Validators.required,Validators.minLength(11)]),
      rePassword:new FormControl(null ,[Validators.required])
     })
     SbmitRegister(forminfo:FormControl)
     {console.log(forminfo);}
}
