import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';

@Component({
  standalone: true,
  imports: [NgFor, SectionWrapperComponent, IonIcon],
  template: `
    <section class="secteurs-hero">
      <div class="container">
        <span class="eyebrow">Secteurs</span>
        <h1 class="hero-title">Une expertise multisectorielle au service de vos enjeux metiers.</h1>
        <p class="hero-lead">Nous accompagnons des organisations evoluant dans des environnements economiques, reglementaires et operationnels varies.</p>
      </div>
    </section>

    <app-section-wrapper title="Secteurs" lead="Une expertise multisectorielle adossee a une comprehension fine des enjeux metiers, reglementaires et operationnels.">
      <div class="content-grid">
        <article class="panel sectors-panel">
          <h3>Secteurs d activite</h3>
          <ul class="sector-list">
            <li *ngFor="let sector of sectors"><ion-icon name="business-outline"></ion-icon><span>{{ sector }}</span></li>
          </ul>
        </article>

        <article class="panel">
          <h3>Nous ont fait confiance - En France</h3>
          <ul>
            <li *ngFor="let item of franceReferences">{{ item }}</li>
          </ul>
        </article>

        <article class="panel">
          <h3>Nous ont fait confiance - A l etranger</h3>
          <ul>
            <li *ngFor="let item of internationalReferences">{{ item }}</li>
          </ul>
        </article>
      </div>
    </app-section-wrapper>
  `,
  styles: [`
    .secteurs-hero {
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

    .content-grid {
      display: grid;
      gap: var(--space-lg);
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }

    .panel {
      position: relative;
      background: var(--ei-surface);
      border: 1px solid var(--ei-border);
      border-radius: var(--radius-lg);
      padding: var(--space-lg);
      transition: transform var(--transition-base), box-shadow var(--transition-base);
    }

    .panel:hover {
      transform: translateY(-4px);
      box-shadow: var(--ei-shadow-lg);
    }

    .panel h3 {
      margin: 0 0 var(--space-sm);
      color: var(--ei-primary);
      font-size: 1.1rem;
    }

    .panel ul {
      margin: 0;
      padding-left: var(--space-md);
      color: var(--ei-muted);
      line-height: 1.7;
    }

    .panel li {
      margin-bottom: 0.5rem;
    }

    .panel li:last-child {
      margin-bottom: 0;
    }

    .sector-list {
      list-style: none;
      padding-left: 0;
      display: grid;
      gap: 0.55rem;
    }

    .sector-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 0;
    }

    .sector-list ion-icon {
      color: var(--ei-accent);
      font-size: 1rem;
      margin-top: 0.2rem;
      flex-shrink: 0;
    }

    .sectors-panel::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--ei-accent) 0%, #60a5fa 100%);
      border-radius: 12px 12px 0 0;
    }
  `]
})
export class SecteursPageComponent {
  sectors = [
    'Nouvelles technologies de l information et de la communication (NTIC) et intelligence artificielle (IA)',
    'Media et audiovisuel',
    'Commerce et distribution',
    'Industrie',
    'BTP et immobilier',
    'Services aux entreprises',
    'Services petroliers'
  ];

  franceReferences = [
    'Commerce des equipements petroliers',
    'Audiovisuel et media',
    'CALLAM AI (NTIC et IA)',
    'Services touristiques'
  ];

  internationalReferences = [
    'Grande Bretagne - Service petrolier',
    'Canada - Service petrolier',
    'Tunisie - Commerce de meubles et articles decoratifs'
  ];
}
