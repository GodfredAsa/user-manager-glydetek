import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomResponse } from '../components/response/custom-response';
import { environment } from '../environment/environment.dev.';
import { SignupRequest } from '../components/requests/signu-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host = environment.apiUrl;

    constructor(
      private http: HttpClient,
    ) { };



    public signUp({signupDetails}): Observable<CustomResponse | HttpErrorResponse>{
      return this.http.post<CustomResponse | HttpErrorResponse>(`${this.host}/sign-up`, signupDetails)
    }
}
