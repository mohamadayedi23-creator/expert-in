import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { IonButton, IonContent } from '@ionic/angular/standalone';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';

@Component({
  standalone: true,
  imports: [IonContent, RouterLink, NgFor, IonButton, SectionWrapperComponent, InfoCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePageComponent {
  services = [
    ['bar-chart-outline', 'Strategy & Management', 'Vision stratégique, gouvernance et pilotage de la performance.'],
    ['cash-outline', 'Financial Advisory', 'Direction financière externalisée et optimisation de trésorerie.'],
    ['megaphone-outline', 'Marketing', 'Positionnement, segmentation et activation de marque.'],
    ['leaf-outline', 'CSR / ESG', 'Transformation durable et reporting extra-financier.']
  ];
}
