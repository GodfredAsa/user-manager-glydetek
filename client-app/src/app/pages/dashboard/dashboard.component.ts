import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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
