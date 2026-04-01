import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, IonHeader, IonToolbar, IonButtons, IonIcon, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  links = [
    { path: '', label: 'Accueil' },
    { path: '/cabinet', label: 'Le Cabinet' },
    { path: '/expertise', label: 'Expertise' },
    { path: '/approche', label: 'Approche' },
    { path: '/secteurs', label: 'Secteurs' },
    { path: '/partenaires', label: 'Partenaires' },
    { path: '/contact', label: 'Contact' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
