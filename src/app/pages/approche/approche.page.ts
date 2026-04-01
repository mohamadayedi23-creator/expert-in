import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';

@Component({
  standalone: true,
  imports: [SectionWrapperComponent, TimelineComponent],
  template: `
    <app-section-wrapper title="Notre approche" lead="Une méthode en quatre étapes pour sécuriser vos transformations.">
      <app-timeline [steps]="steps"></app-timeline>
    </app-section-wrapper>
  `
})
export class ApprochePageComponent {
  steps = [
    { title: 'Global diagnosis', description: 'Analyse holistique du modèle économique, des processus et des risques.' },
    { title: 'Strategy definition', description: 'Construction de la feuille de route priorisée, chiffrée et pilotable.' },
    { title: 'Execution', description: 'Déploiement opérationnel avec gouvernance, conduite du changement et coaching.' },
    { title: 'Performance monitoring', description: 'Tableaux de bord, indicateurs et rituels de revue de performance.' }
  ];
}
