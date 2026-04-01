import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  imports: [RouterLink, NgFor, IonButton, IonIcon],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePageComponent {
  stats = [
    { value: '15+', label: 'Annees d experience' },
    { value: '200+', label: 'Missions accompagnees' },
    { value: '3', label: 'Pays de presence' },
    { value: '360°', label: 'Accompagnement global' }
  ];

  services = [
    {
      icon: 'analytics-outline',
      title: 'Strategie et management',
      description: 'Vision strategique, gouvernance et pilotage de la performance.'
    },
    {
      icon: 'business-outline',
      title: 'Direction financiere externalisee',
      description: 'Structuration financiere, tresorerie et outils d aide a la decision.'
    },
    {
      icon: 'globe-outline',
      title: 'Marketing et developpement',
      description: 'Positionnement, segmentation, branding et expansion internationale.'
    },
    {
      icon: 'checkmark-circle-outline',
      title: 'RSE, ESG et digital',
      description: 'Transformation durable, reporting extra-financier et modernisation des processus.'
    }
  ];

  reasons = [
    'Conseil sur-mesure avec forte proximite dirigeant.',
    'Expertise multiculturelle France, Tunisie, Maroc.',
    'Methodologie robuste orientee impact business.',
    'Execution rigoureuse avec standards de qualite eleves.'
  ];
}
