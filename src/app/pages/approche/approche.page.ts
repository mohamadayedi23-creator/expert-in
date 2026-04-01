import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';

@Component({
  standalone: true,
  imports: [NgFor, SectionWrapperComponent, IonIcon],
  template: `
    <section class="approche-hero">
      <div class="container">
        <span class="eyebrow">Notre methode</span>
        <h1 class="hero-title">Une approche claire, structuree et orientee execution.</h1>
        <p class="hero-lead">De l analyse initiale au pilotage continu, nous transformons vos ambitions en plans d actions mesurables.</p>
      </div>
    </section>

    <app-section-wrapper title="Approche" lead="Une demarche structuree en 4 etapes pour transformer la strategie en resultats mesurables.">
      <div class="approche-grid">
        <article class="step-card" *ngFor="let step of steps; let i = index">
          <div class="step-head">
            <span class="step-index">0{{ i + 1 }}</span>
            <ion-icon [name]="step.icon"></ion-icon>
          </div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </article>
      </div>
    </app-section-wrapper>
  `,
  styles: [`
    .approche-hero {
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
      max-width: 860px;
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

    .approche-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--space-lg);
    }

    .step-card {
      position: relative;
      background: var(--ei-surface);
      border: 1px solid var(--ei-border);
      border-radius: var(--radius-lg);
      padding: var(--space-lg);
      transition: transform var(--transition-base), box-shadow var(--transition-base);
    }

    .step-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--ei-shadow-lg);
    }

    .step-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--ei-accent) 0%, #60a5fa 100%);
      border-radius: 12px 12px 0 0;
    }

    .step-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--space-sm);
    }

    .step-head ion-icon {
      font-size: 1.25rem;
      color: var(--ei-accent);
    }

    .step-index {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 999px;
      background: var(--ei-accent-light);
      color: var(--ei-accent);
      font-weight: 700;
      margin-bottom: var(--space-sm);
    }

    h3 {
      margin: 0 0 var(--space-xs);
      color: var(--ei-primary);
      font-size: 1.1rem;
    }

    p {
      margin: 0;
      color: var(--ei-muted);
      line-height: 1.7;
    }
  `]
})
export class ApprochePageComponent {
  steps = [
    {
      icon: 'analytics-outline',
      title: 'Analyse et diagnostic global',
      description:
        'Evaluation multidimensionnelle de la performance financiere, de l organisation, du modele economique, de la gouvernance et de l environnement concurrentiel pour identifier les leviers de creation de valeur et les zones de risque.'
    },
    {
      icon: 'business-outline',
      title: 'Definition de la strategie et plan d actions',
      description:
        'Structuration d une feuille de route pragmatique avec objectifs precis, indicateurs de performance, priorites d execution et calendrier adapte aux ressources de l entreprise.'
    },
    {
      icon: 'people-outline',
      title: 'Mise en oeuvre operationnelle',
      description:
        'Traduction des orientations strategiques en actions concretes, coordination des fonctions, mobilisation des ressources et pilotage de l execution dans la duree.'
    },
    {
      icon: 'checkmark-circle-outline',
      title: 'Suivi, pilotage et amelioration continue',
      description:
        'Mise en place de tableaux de bord, KPI et revues de performance pour ajuster les decisions, renforcer la qualite de l information financiere et soutenir une croissance durable.'
    }
  ];
}
