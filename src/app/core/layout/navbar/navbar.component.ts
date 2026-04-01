import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, IonHeader, IonToolbar, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen = false;

  links = [
    { path: '', label: 'Accueil' },
    { path: '/cabinet', label: 'Le Cabinet' },
    { path: '/expertise', label: 'Expertise' },
    { path: '/approche', label: 'Approche' },
    { path: '/secteurs', label: 'Secteurs' },
    { path: '/partenaires', label: 'Partenaires' },
    { path: '/contact', label: 'Contact' }
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
