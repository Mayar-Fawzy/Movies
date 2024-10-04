import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   isLogin:boolean=false;
   constructor(private _Authservice:AuthService){}
  ngOnInit(): void {
    //watch any token sign in from auth.servies
    this._Authservice.userData.subscribe(()=>{
      if(this._Authservice.userData.getValue()!= null){
        this.isLogin=true;
      }
      else{this.isLogin=false}
    })
  }
  CallLogOut(){
    this._Authservice.logOut();
  }
}
