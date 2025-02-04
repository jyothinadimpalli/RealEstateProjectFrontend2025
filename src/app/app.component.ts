import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { AppCommonModule } from './app-commonmodule';
import { MaterialModule } from './app-angularmaterial';
import { NavbarComponent } from './components/navbar/navbar.component';



@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Required in Angular 19
   imports:[MaterialModule,AppCommonModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
