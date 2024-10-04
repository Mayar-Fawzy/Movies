import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Movies';
  constructor(private _authService:AuthService){
    //check after login loggout after 5second
  //    _authService.userData.subscribe(()=>{
  //     if(_authService.userData.getValue()!=null){
  //        setTimeout(() => {
  //         _authService.logOut()        }, 5000);
  //     }
  //    })

  }
}
