import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePageComponent) },
  { path: 'cabinet', loadComponent: () => import('./pages/cabinet/cabinet.page').then((m) => m.CabinetPageComponent) },
  { path: 'expertise', loadComponent: () => import('./pages/expertise/expertise.page').then((m) => m.ExpertisePageComponent) },
  { path: 'approche', loadComponent: () => import('./pages/approche/approche.page').then((m) => m.ApprochePageComponent) },
  { path: 'secteurs', loadComponent: () => import('./pages/secteurs/secteurs.page').then((m) => m.SecteursPageComponent) },
  { path: 'partenaires', loadComponent: () => import('./pages/partenaires/partenaires.page').then((m) => m.PartenairesPageComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPageComponent) },
  { path: '**', redirectTo: '' }
];
