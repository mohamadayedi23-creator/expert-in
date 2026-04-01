import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';

@Component({
  standalone: true,
  imports: [IonIcon, SectionWrapperComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss'
})
export class ContactPageComponent {}
