import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';

@Component({
  standalone: true,
  imports: [NgFor, SectionWrapperComponent],
  template: `
    <app-section-wrapper title="Partenaires" lead="Un écosystème structuré pour délivrer des missions à fort impact.">
      <div class="logos">
        <div *ngFor="let p of partners">{{ p }}</div>
      </div>
    </app-section-wrapper>
  `,
  styles: [`
    .logos { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:1rem; }
    .logos div {
      background:#fff;
      border:1px solid var(--ei-border);
      border-radius:14px;
      padding:1.1rem;
      display:grid;
      place-items:center;
      min-height:88px;
      font-weight:600;
      color:var(--ei-primary);
      transition:.2s ease;
    }
    .logos div:hover { transform: translateY(-3px); box-shadow: var(--ei-shadow); }
  `]
})
export class PartenairesPageComponent {
  partners = ['Expert Up Tunisia', 'Expert One Morocco', 'Partenaires France', 'Réseau international'];
}
