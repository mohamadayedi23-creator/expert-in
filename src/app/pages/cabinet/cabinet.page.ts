import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';

@Component({
  standalone: true,
  imports: [NgFor, SectionWrapperComponent, InfoCardComponent],
  templateUrl: './cabinet.page.html',
  styleUrl: './cabinet.page.scss'
})
export class CabinetPageComponent {
  team = [
    { name: 'Sophie Benali', role: 'Managing Partner', description: 'Pilotage des missions de transformation et stratégie corporate.' },
    { name: 'Karim El Azhari', role: 'Partner Finance', description: 'Expert en restructuration financière et performance cash.' },
    { name: 'Claire Martin', role: 'Partner Marketing', description: 'Accompagne le positionnement et la croissance multi-marchés.' }
  ];
}
