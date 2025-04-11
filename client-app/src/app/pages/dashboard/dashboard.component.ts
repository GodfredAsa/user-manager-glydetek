import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users = [
    {
      avatar: 'path-to-avatar1.jpg',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Administrator',
    },
    {
      avatar: 'path-to-avatar2.jpg',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Editor',
    },
    // Add more user objects as needed
  ];
}
