import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../app-angularmaterial';
import { AppCommonModule } from '../../app-commonmodule';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // ✅ Add this
  imports: [CommonModule, AppCommonModule, MaterialModule, RouterModule], // ✅ Import RouterModule
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // ✅ Fix styleUrls
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
   // alert(this.authService.isLoggedIn());
    return this.authService.isLoggedIn(); // ✅ Ensure AuthService has `isLoggedIn()`
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
