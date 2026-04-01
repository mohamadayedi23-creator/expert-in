import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp, IonContent, IonSpinner } from '@ionic/angular/standalone';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IonApp, IonContent, IonSpinner, NavbarComponent, FooterComponent],
  template: `
    <ion-app>
      <app-navbar></app-navbar>
      <ion-content>
        <router-outlet></router-outlet>
      </ion-content>
      <app-footer></app-footer>
    </ion-app>
  `
})
export class AppComponent {}
