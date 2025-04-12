import { Component, Input } from '@angular/core';

@Component({
  selector: 'navigate-to',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent {
  @Input() guide: string = "";
  @Input() redirectTo: string = ""
  @Input() redirectMessage: string = ""

}
