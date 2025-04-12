import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-el',
  templateUrl: './nav-el.component.html',
  styleUrls: ['./nav-el.component.css']
})
export class NavElComponent {

  @Input() iconClasses: string;
  @Input() label: string;
  @Input() link: string;
  @Input() onClick?: () => void;

  handleClick() {
    if(this.onClick) {
      this.onClick();
    }
  }

}
