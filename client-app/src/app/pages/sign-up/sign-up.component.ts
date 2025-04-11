import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { SignupRequest } from 'src/app/components/requests/signu-request';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    private subscriptions: Subscription[] = [];
    public showLoading: boolean = false;
    public showError: boolean = false;
    public showSuccess: boolean = false;
    public notificationMessage: string = ""

    signUpForm = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      preferredName: new FormControl(""),
      gender: new FormControl("", [Validators.required]),
      email: new FormControl("", [ Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(1)]),
    });

      constructor(
        private _router: Router,
        private _utilsService: UtilsService,
        private _userService: UserService
      ){}


      signup(){
        const signupDetails =  {
          firstName: this.signUpForm.value.firstName,
          lastName: this.signUpForm.value.lastName,
          preferredName: this.signUpForm.value.preferredName,
          gender: this.signUpForm.value.gender,
          email: this.signUpForm.value.email,
          password: this.signUpForm.value.password
        }

        this.showLoading = true;

        this.subscriptions.push(
          this._userService.signUp({signupDetails}).subscribe({
            next: (res) => {
              this.notificationMessage = res.message
              this.showSuccess = true
              console.log(res);
              setTimeout(() => {
                this.showSuccess = false
                this.showLoading = false;
                this._router.navigateByUrl("/")
              }, 4000);

            },error: (error: HttpErrorResponse) => {
              this.showError = true;

              this.notificationMessage = error.error?.message || "An unexpected error occurred during sign-in.";
              this.showLoading = false;

          setTimeout(() => {
            this.showError = false;
            this.showLoading = false;
          }, 4000);

            }
          })
        )
      }


}
