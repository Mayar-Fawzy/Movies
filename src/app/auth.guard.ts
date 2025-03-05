// auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> {
    if (this.authService.userData.getValue()!=null) {
      return of (true);
    } else {
      this.router.navigate(['/login']); // Redirect to login page if not authenticated
      return of (false);
    }
  }
}
