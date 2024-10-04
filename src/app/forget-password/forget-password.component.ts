import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
   
   EmailPassword:FormGroup=new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email])
   })


  ResetCodePassword:FormGroup=new FormGroup({
    resetCode:new FormControl(null, [Validators.required])
   })

   ResetPassword:FormGroup=new FormGroup({
    email:new FormControl(null, [Validators.required]),
    newPassword:new FormControl(null,[Validators.required])
   })
}
