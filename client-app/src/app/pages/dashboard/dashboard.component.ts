import { Component, OnInit } from '@angular/core';
import { CustomResponse } from 'src/app/components/response/custom-response';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  private subscription: Subscription[] = []
  public userProfileData: CustomResponse;

  constructor(
    private _userService: UserService,
    private _utilsService: UtilsService,
    private _authenticationService: AuthenticationService
  ){}


  ngOnInit(): void {
    this._authenticationService.isUserLoggedIn()
    if(!this._authenticationService.isUserLoggedIn()){
      this._authenticationService.logoutUser();
    }

    this.getUserProfile()
  }

  getUserProfile(){
    const email = this._utilsService.getValueFromLocalStorage("email");
    this.subscription.push(
      this._userService.getUserProfile(email).subscribe({
        next: (res: CustomResponse) => {
          this.userProfileData = res.data
          console.log(this.userProfileData);
        }, error: (error: HttpErrorResponse) => {
          console.log(error.error?.message);
        }
      })
    )


  }


  statsData = [
    {
      cssClasses: 'bg-blue-100',
      iconClasses: 'fas fa-users text-blue-500',
      label: 'Users',
      amount: '1200'
    },
    {
      cssClasses: 'bg-green-100',
      iconClasses: 'fas fa-dollar-sign text-green-500',
      label: 'Sales',
      amount: '$43,000'
    },
    {
      cssClasses: 'bg-yellow-100',
      iconClasses: 'fas fa-chart-line text-yellow-500',
      label: 'Visitors',
      amount: '8500'
    }
  ]

}
