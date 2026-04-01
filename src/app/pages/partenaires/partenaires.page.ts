import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';

@Component({
  standalone: true,
  imports: [NgFor, SectionWrapperComponent, IonIcon],
  template: `
    <section class="partners-hero">
      <div class="container">
        <span class="eyebrow">Reseau partenaires</span>
        <h1 class="hero-title">Un ecosysteme international de cabinets et d experts complementaires.</h1>
        <p class="hero-lead">Nous mobilisons des partenaires de confiance partageant les memes standards de qualite pour securiser vos projets.</p>
      </div>
    </section>

    <app-section-wrapper title="Partenaires" lead="Un ecosysteme de cabinets et d experts complementaires en France et a l international.">
      <div class="partners-stack">
        <section class="partner-group">
          <h3>Cabinets du meme groupe</h3>
          <article class="partner-card" *ngFor="let cabinet of groupCabinets">
            <div class="card-head">
              <ion-icon name="business-outline"></ion-icon>
            </div>
            <h4>{{ cabinet.name }}</h4>
            <p>{{ cabinet.description }}</p>
            <ul>
              <li *ngFor="let detail of cabinet.details">{{ detail }}</li>
            </ul>
          </article>
        </section>

        <section class="partner-group">
          <h3>Partenaires en France</h3>
          <ul class="partner-list">
            <li *ngFor="let partner of francePartners">{{ partner }}</li>
          </ul>
        </section>

        <section class="partner-group">
          <h3>Partenaires internationaux</h3>
          <ul class="partner-list">
            <li *ngFor="let partner of internationalPartners">{{ partner }}</li>
          </ul>
        </section>
      </div>
    </app-section-wrapper>
  `,
  styles: [`
    .partners-hero {
      padding: var(--space-3xl) 0 var(--space-2xl);
      background: linear-gradient(135deg, var(--ei-primary) 0%, #17365c 100%);
      color: #fff;
    }

    .eyebrow {
      display: inline-block;
      margin-bottom: var(--space-sm);
      padding: 0.4rem 1rem;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      background: rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-full);
    }

    .hero-title {
      margin: 0 0 var(--space-sm);
      max-width: 880px;
      font-size: clamp(2rem, 5vw, 3.2rem);
      line-height: 1.1;
      letter-spacing: -0.03em;
    }

    .hero-lead {
      margin: 0;
      max-width: 760px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.7;
    }

    .partners-stack {
      display: grid;
      gap: var(--space-lg);
    }

    .partner-group {
      position: relative;
      background: var(--ei-surface);
      border: 1px solid var(--ei-border);
      border-radius: var(--radius-lg);
      padding: var(--space-lg);
      transition: transform var(--transition-base), box-shadow var(--transition-base);
    }

    .partner-group:hover {
      transform: translateY(-3px);
      box-shadow: var(--ei-shadow-lg);
    }

    .partner-group h3 {
      margin: 0 0 var(--space-sm);
      color: var(--ei-primary);
      font-size: 1.12rem;
    }

    .partner-card {
      padding: var(--space-md);
      border: 1px solid var(--ei-border);
      border-radius: var(--radius-md);
      margin-bottom: var(--space-sm);
      background: #fff;
    }

    .card-head {
      width: 36px;
      height: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: var(--ei-accent-light);
      margin-bottom: 0.45rem;
    }

    .card-head ion-icon {
      color: var(--ei-accent);
      font-size: 1rem;
    }

    .partner-card:last-child {
      margin-bottom: 0;
    }

    .partner-card h4 {
      margin: 0 0 0.35rem;
      color: var(--ei-primary);
      font-size: 1rem;
    }

    .partner-card p {
      margin: 0 0 var(--space-xs);
      color: var(--ei-muted);
    }

    .partner-card ul,
    .partner-list {
      margin: 0;
      padding-left: var(--space-md);
      color: var(--ei-muted);
      line-height: 1.7;
    }

    .partner-card li,
    .partner-list li {
      margin-bottom: 0.45rem;
    }

    .partner-card li:last-child,
    .partner-list li:last-child {
      margin-bottom: 0;
    }
  `]
})
export class PartenairesPageComponent {
  groupCabinets = [
    {
      name: 'EXPERT UP - Tunisie',
      description: 'Societe d expertise-comptable, membre de l OECT.',
      details: [
        'Adresse : Residence les Cascades, Passage du Lac Huron, Les Berges du Lac, 1035 La Marsa (Tunisie).',
        'Telephone : +216 56 74 00 12',
        'Mail : h.mseddi@expertup.net',
        'Site web : www.expertup.net'
      ]
    },
    {
      name: 'EXPERT ONE - Maroc',
      description: 'Cabinet de conseil en management et strategie.',
      details: [
        'Adresse : Rue Soumaya, Residence Chehrazed 3, Etage 5, Bureau 22, 20340 Casablanca (Maroc).',
        'Telephone : +212 0770 810847',
        'Mail : expert-one@gmail.com'
      ]
    }
  ];

  francePartners = [
    '2H Expertise et Conseil (Partenaire GOLD) - 17 avenue Alfred Roll, 75017 Paris - +33 (0)1 84 20 74 98 - contact@2h-experts.com - www.2h-experts.com',
    'Reseau d avocats en droit des affaires, droit fiscal, propriete intellectuelle et droit des etrangers'
  ];

  internationalPartners = [
    'Maroc : OUARTASSI Audit et Conseil - Loubna OUARTASSI',
    'Tunisie : Cabinet d avocat AG2 - Centre Medical Kammoun, Cité Ennasser, Ariana - +216 70 621 321 - contact@aglawfirm.tn - www.aglawfirm.tn',
    'Maroc : Maitre BELHAJJAM Lamia, avocate au barreau de Rabat - 10 rue Damas, Rabat - +212 6 67 12 16 79 - belhajjam.lamia@gmail.com'
  ];
}
