import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-section-wrapper',
  standalone: true,
  imports: [NgIf],
  template: `
    <section class="block fade-in">
      <div class="container">
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-lead" *ngIf="lead">{{ lead }}</p>
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styleUrl: './section-wrapper.component.scss'
})
export class SectionWrapperComponent {
  @Input() title = '';
  @Input() lead = '';
}
