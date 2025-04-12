import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class  AuthenticationGuard implements CanActivate{

  private isAuthenticated: boolean = false;

  constructor(
    private _utilsService: UtilsService,
     private router: Router){}


  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isAuthenticated;
  }


  private isUserLoggedIn(): boolean{
    if(this._utilsService.getValueFromLocalStorage('token')){
      this.isAuthenticated = true;
    }

    this.router.navigate(['login']);
    return this.isAuthenticated;
  }

}
