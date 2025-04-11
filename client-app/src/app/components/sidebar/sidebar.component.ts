import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems =  [
    {
      name: 'Dashboard',
      icon: 'fas fa-home',
      link: '/dashboard'
    },
    {
      name: 'Profile',
      icon: 'fa-regular fa-circle-user',
      link: '/dashboard/profile'
    },
    {
      name: 'Messages',
      icon: 'fas fa-envelope',
      link: '/messages'
    },
    {
      name: 'Settings',
      icon: 'fas fa-cog',
      link: '/settings',
      subItems: [
        {
          name: 'General',
          icon: 'fa-cogs',
          link: '/settings/general'
        },
        {
          name: 'Security',
          icon: 'fa-shield-alt',
          link: '/settings/security'
        }
      ]
    }
  ];

}
