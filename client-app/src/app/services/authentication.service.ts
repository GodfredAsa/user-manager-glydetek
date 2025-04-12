import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment.dev';
import { CustomResponse } from '../components/response/custom-response';
import { UtilsService } from './utils.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public host = environment.apiUrl;
  private token: string;
  private isTokenExpired: boolean = false;
  private userId: string;
  private jwtHelper = new  JwtHelperService();

  constructor(
    private http: HttpClient,
    private _utilsService: UtilsService,
    private _router: Router
  ) { };


  public signIn(email: any, password: any): Observable<CustomResponse | HttpErrorResponse>{
    return this.http.post<CustomResponse | HttpErrorResponse>(`${this.host}/login`, {email, password})
  }

  public isUserLoggedIn(): boolean{
    this.token = this._utilsService.getValueFromLocalStorage("token");
    if(this.token !== null && this.token !==""){
      if(this.jwtHelper.decodeToken(this.token).userId != null || ""){
        if(!this.jwtHelper.isTokenExpired(this.token)){
          this.userId = this.jwtHelper.decodeToken(this.token).sub;
          this.isTokenExpired = true;
        }
      } else{
        this.logoutUser();
        this.isTokenExpired =  false;
      }
      return this.isTokenExpired;
    }
  }

  public logoutUser(): void {
   this._utilsService.removeAllValuesFromLocalStorage();
    this._router.navigateByUrl("/")
  }
}
