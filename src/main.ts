import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; // ✅ Import HttpClient
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // ✅ Call provideHttpClient() instead of just provideHttpClient
    provideRouter(routes), // ✅ Correct usage
    provideAnimations(), // ✅ Enables animations
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));
