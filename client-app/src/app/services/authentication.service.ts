import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment.dev.';
import { CustomResponse } from '../components/response/custom-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private host = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { };



  public signIn(email: any, password: any): Observable<CustomResponse | HttpErrorResponse>{
    return this.http.post<CustomResponse | HttpErrorResponse>(`${this.host}/login`, {email, password})
  }
}
