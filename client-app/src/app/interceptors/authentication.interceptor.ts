import { Injectable, OnInit } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from '../services/utils.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private _utilsService: UtilsService,
    private _authenticationService: AuthenticationService
  ) {}

  intercept(httpRequest: HttpRequest<any>, HttpHandler: HttpHandler): Observable<HttpEvent<any>> {
    switch (true) {
      case httpRequest.url.includes(`${this._authenticationService.host}/login`):
      case httpRequest.url.includes(`${this._authenticationService.host}/sign-up`):
        return HttpHandler.handle(httpRequest);
      default:
        const token = this._utilsService.getValueFromLocalStorage('token');
        const authorizedRequest = httpRequest.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });
        return HttpHandler.handle(authorizedRequest);
    }

    }
}
