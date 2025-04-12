import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ERROR_OCCURRED } from 'src/app/components/constants/messages';
import { CustomResponse } from 'src/app/components/response/custom-response';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  private subscriptions: Subscription[] = [];
  public showLoading: boolean = false;
  public showError: boolean = false;
  public showSuccess: boolean = false;
  public notificationMessage: string;

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)]),
  });


  constructor(
    private _router: Router,
    private _utilsService: UtilsService,
    private _authenticationService: AuthenticationService,
  ){}
  ngOnInit(): void {
   if( this._utilsService.getValueFromLocalStorage('token') &&
       this._utilsService.getValueFromLocalStorage("email")){
    this._router.navigateByUrl("/dashboard")
   }else{
    this._router.navigateByUrl("/")
   }
  }


  signIn(){
    this.showLoading = true;
    this.subscriptions.push(
      this._authenticationService.signIn(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (res: CustomResponse) => {
            this.showSuccess = true
            this.notificationMessage = res.message
            setTimeout(() => {
              this.showSuccess = false
              this._utilsService.setValueToLocalStorage("token", res.data);
              this._utilsService.setValueToLocalStorage("email", this.loginForm.value.email);
              this.showLoading = false;
              this._router.navigate(["/dashboard"])
            }, 2000);
        },
        error: (error: HttpErrorResponse) => {
          this.showError = true;
          this.showLoading = false;
          this.notificationMessage = error.error.message || ERROR_OCCURRED;
          this.showLoading = false;
          setTimeout(() => {
            this.showError = false;
          }, 4000);
        }
      })
    )
  }



}
