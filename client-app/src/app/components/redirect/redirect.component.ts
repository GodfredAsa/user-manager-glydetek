import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent {
  @Input() guide: string = "";
  @Input() redirectTo: string = ""
  @Input() redirectMessage: string = ""

}
