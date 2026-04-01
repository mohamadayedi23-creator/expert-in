import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [IonIcon],
  template: `
    <article class="card">
      <ion-icon [name]="icon"></ion-icon>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </article>
  `,
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() icon = 'sparkles-outline';
  @Input() title = '';
  @Input() description = '';
}
