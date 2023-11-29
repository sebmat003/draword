import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

void bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTES), provideAnimations()],
});
