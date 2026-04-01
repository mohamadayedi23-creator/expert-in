import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  analyticsOutline, 
  peopleOutline, 
  shieldCheckmarkOutline, 
  globeOutline,
  logoLinkedin,
  menuOutline,
  closeOutline,
  sparklesOutline,
  locationOutline,
  checkmarkCircleOutline,
  arrowForwardOutline,
  mailOutline,
  callOutline,
  businessOutline
} from 'ionicons/icons';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

// Register icons globally
addIcons({
  'analytics-outline': analyticsOutline,
  'people-outline': peopleOutline,
  'shield-checkmark-outline': shieldCheckmarkOutline,
  'globe-outline': globeOutline,
  'logo-linkedin': logoLinkedin,
  'menu-outline': menuOutline,
  'close-outline': closeOutline,
  'sparkles-outline': sparklesOutline,
  'location-outline': locationOutline,
  'checkmark-circle-outline': checkmarkCircleOutline,
  'arrow-forward-outline': arrowForwardOutline,
  'mail-outline': mailOutline,
  'call-outline': callOutline,
  'business-outline': businessOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })),
    provideAnimations(),
    provideIonicAngular()
  ]
}).catch((err) => console.error(err));
