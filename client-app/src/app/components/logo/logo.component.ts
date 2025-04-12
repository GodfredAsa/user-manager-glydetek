import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo-lib',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  @Input() imageUrl: string;
  @Input() cssClasses: string;
  @Input() altName: string;

}
