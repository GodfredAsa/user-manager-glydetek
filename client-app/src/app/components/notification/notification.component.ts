import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() message: string = '';
  @Input() title: string = '';
  @Input() cssClasses: string = '';
  @Input()show: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.show = false;
    }, 4000);
  }

  close(): void {
    this.show = false;
  }

}


// Type	Border	Background	Text
// Info	border-blue-500	bg-blue-50	text-blue-800
// Success	border-green-500	bg-green-50	text-green-800
// Warning	border-yellow-500	bg-yellow-50	text-yellow-800
// Error	border-red-500	bg-red-50	text-red-800
