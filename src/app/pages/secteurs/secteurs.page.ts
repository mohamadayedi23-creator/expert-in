import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';

@Component({
  standalone: true,
  imports: [NgFor, SectionWrapperComponent, InfoCardComponent],
  template: `
    <app-section-wrapper title="Secteurs" lead="Une expertise multisectorielle pour adresser vos enjeux spécifiques.">
      <div class="grid grid-3">
        <app-info-card *ngFor="let sector of sectors" icon="business-outline" [title]="sector" description="Accompagnement stratégique, financier et transformationnel."></app-info-card>
      </div>
    </app-section-wrapper>
  `
})
export class SecteursPageComponent {
  sectors = ['IT & AI', 'Media', 'Commerce', 'Industry', 'Real estate', 'Oil services'];
}
