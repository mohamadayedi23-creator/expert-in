import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';

@Component({
  standalone: true,
  imports: [NgFor, SectionWrapperComponent],
  templateUrl: './expertise.page.html',
  styleUrl: './expertise.page.scss'
})
export class ExpertisePageComponent {
  blocks = [
    { title: 'Management & Strategy', items: ['Strategy', 'Organizational diagnosis', 'Governance', 'Change management', 'International expansion'] },
    { title: 'Financial Advisory', items: ['Part-time CFO', 'Financial dashboards', 'Business plans', 'Cash optimization', 'Financial restructuring'] },
    { title: 'Marketing & Branding', items: ['Market analysis', 'Product positioning', 'Segmentation', 'Marketing strategy', 'Branding'] },
    { title: 'CSR / ESG', items: ['CSR diagnosis', 'ESG strategy', 'Extra-financial reporting'] },
    { title: 'Digital Transformation', items: ['Digital strategy', 'Process automation', 'Data & BI', 'ERP / CRM integration', 'Cybersecurity'] }
  ];
}
