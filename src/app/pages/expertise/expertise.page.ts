import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';

@Component({
  standalone: true,
  imports: [SectionWrapperComponent, IonIcon],
  templateUrl: './expertise.page.html',
  styleUrl: './expertise.page.scss'
})
export class ExpertisePageComponent {}
