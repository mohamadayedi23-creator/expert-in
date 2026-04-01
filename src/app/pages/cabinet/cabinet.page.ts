import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  imports: [NgFor, IonIcon],
  templateUrl: './cabinet.page.html',
  styleUrl: './cabinet.page.scss'
})
export class CabinetPageComponent {
  team = [
    { name: 'MSEDDI Hamdi', role: 'Fondateur et dirigeant', description: 'Pilotage des missions de stratégie, management et transformation des organisations.' },
    { name: 'EL BAHI Sofiene', role: 'Consultant senior', description: 'Accompagnement des dirigeants sur les enjeux financiers, organisationnels et de performance.' },
    { name: 'MASMOUDI Chema', role: 'Specialiste marketing strategique', description: 'Specialiste en marketing strategique et gestion de projets, avec une experience academique et operationnelle en environnement international et multilingue.' },
    { name: 'SAADALLAH Sami', role: 'Consultant associe', description: 'Accompagnement des projets de transformation et de developpement a forte valeur ajoutee.' },
    { name: 'BEN AMOR Iheb', role: 'Consultant associe', description: 'Intervention sur des missions transverses en strategie, finance et digital.' }
  ];

  whyChoose = [
    {
      icon: 'people-outline',
      title: 'Equipe pluridisciplinaire',
      description: 'Une equipe d experts dans des domaines varies pour repondre a vos enjeux complexes.'
    },
    {
      icon: 'globe-outline',
      title: 'Reseau de partenaires',
      description: 'Un reseau partageant les memes valeurs et visions pour garantir la qualite d execution.'
    },
    {
      icon: 'shield-checkmark-outline',
      title: 'Conduite securisee',
      description: 'Une assurance quant a la bonne conduite de vos projets strategiques et operationnels.'
    },
    {
      icon: 'analytics-outline',
      title: 'Interlocuteur unique',
      description: 'Un pilotage centralise pour la realisation de missions differentes et complementaires.'
    },
    {
      icon: 'business-outline',
      title: 'Developpement international',
      description: 'Une opportunite de croissance hors frontieres grace a un accompagnement en amont et en aval.'
    },
    {
      icon: 'checkmark-circle-outline',
      title: 'Efficacite et qualite',
      description: 'Une approche fondee sur l efficacite, l efficience et la qualite des livrables.'
    }
  ];

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }
}
