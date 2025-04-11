import { Component, Input } from '@angular/core';

@Component({
  selector: 'stats-lib',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  @Input() label: string;
  @Input() amount: number;
  @Input() cssClasses: string;
  @Input() iconClasses: string;



}
