import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private _authenticationService: AuthenticationService
  ){}
handleClick() {
  this._authenticationService.logoutUser()
}
  menuItems =  [
    {
      name: 'Dashboard',
      icon: 'fas fa-home',
      link: '/dashboard'
    },
    // {
    //   name: 'Profile',
    //   icon: 'fa-regular fa-circle-user',
    //   link: '/dashboard/profile'
    // },
    // {
    //   name: 'Messages',
    //   icon: 'fas fa-envelope',
    //   link: '/messages'
    // },
  ];

}
