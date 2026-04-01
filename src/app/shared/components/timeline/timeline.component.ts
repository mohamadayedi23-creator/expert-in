import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor],
  template: `
    <ol class="timeline">
      <li *ngFor="let step of steps; let i = index">
        <span>{{ i + 1 }}</span>
        <div>
          <h4>{{ step.title }}</h4>
          <p>{{ step.description }}</p>
        </div>
      </li>
    </ol>
  `,
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input() steps: Array<{ title: string; description: string }> = [];
}
