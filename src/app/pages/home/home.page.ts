import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowForward, diamondOutline, barChartOutline, documentTextOutline,
  trendingUpOutline, flashOutline, bulbOutline, shieldCheckmarkOutline,
  checkmarkOutline, businessOutline, constructOutline, libraryOutline,
  wifiOutline, chevronForward, calendarOutline, checkmarkCircleOutline
} from 'ionicons/icons';

@Component({
  standalone: true,
  imports: [RouterLink, NgFor, IonIcon],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePageComponent {

  constructor() {
    addIcons({
      arrowForward, diamondOutline, barChartOutline, documentTextOutline,
      trendingUpOutline, flashOutline, bulbOutline, shieldCheckmarkOutline,
      checkmarkOutline, businessOutline, constructOutline, libraryOutline,
      wifiOutline, chevronForward, calendarOutline, checkmarkCircleOutline
    });
  }

  stats = [
    { value: '15+', label: "Années d'expérience" },
    { value: '200+', label: 'Missions accomplies' },
    { value: '3', label: 'Pays de présence' },
    { value: '98%', label: 'Satisfaction client' }
  ];

  expertisePills = [
    { label: 'Audit & Assurance', link: '/expertise' },
    { label: 'Fiscalité', link: '/expertise' },
    { label: 'Droit des affaires', link: '/expertise' },
    { label: 'Stratégie d\'entreprise', link: '/expertise' },
    { label: 'Deal Advisory', link: '/expertise' },
    { label: 'Transformation Digitale', link: '/expertise' },
    { label: 'Conseil en Management', link: '/expertise' }
  ];

  services = [
    {
      icon: 'bar-chart-outline',
      title: 'Audit & Assurance',
      description: 'Contrôle des comptes, certification financière et conformité réglementaire avec une rigueur absolue.',
      link: '/expertise'
    },
    {
      icon: 'document-text-outline',
      title: 'Conseil Fiscal',
      description: 'Optimisation fiscale, gestion des risques et accompagnement dans les restructurations complexes.',
      link: '/expertise'
    },
    {
      icon: 'trending-up-outline',
      title: 'Stratégie & Performance',
      description: 'Vision stratégique, gouvernance d\'entreprise et pilotage de la performance opérationnelle.',
      link: '/expertise'
    },
    {
      icon: 'flash-outline',
      title: 'Transformation Digitale',
      description: 'Modernisation des processus, intégration technologique et reporting extra-financier ESG.',
      link: '/expertise'
    }
  ];

  reasons = [
    'Conseil sur-mesure avec forte proximité dirigeant',
    'Expertise multiculturelle — France, Tunisie, Maroc',
    'Méthodologie robuste orientée impact business',
    'Exécution rigoureuse avec standards de qualité élevés',
    'Équipe senior dédiée pour chaque mission'
  ];

  sectors = [
    {
      icon: 'business-outline',
      title: 'Services financiers',
      description: 'Banques, assurances et fintech : nous accompagnons votre transformation tout en maîtrisant les risques réglementaires.',
      link: '/secteurs'
    },
    {
      icon: 'construct-outline',
      title: 'Industrie & Construction',
      description: 'Enjeux stratégiques liés aux évolutions réglementaires et à l\'intégration des nouvelles technologies.',
      link: '/secteurs'
    },
    {
      icon: 'library-outline',
      title: 'Secteur public',
      description: 'Modernisation et optimisation de la performance des organisations publiques et para-publiques.',
      link: '/secteurs'
    },
    {
      icon: 'wifi-outline',
      title: 'Tech & Télécommunications',
      description: 'Stratégies de transformation innovantes pour les acteurs du digital, des médias et des télécoms.',
      link: '/secteurs'
    }
  ];
}

 
