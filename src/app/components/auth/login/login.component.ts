import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../app-angularmaterial';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
    imports: [
      RouterModule,   // ✅ Fixes <router-outlet>
      MaterialModule,FormsModule,CommonModule
    ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = { email: '', password: '' };
  errorMessage: string = '';
  constructor(private authService: AuthService,  private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) {}

  login() {
    if (!this.user.email || !this.user.password) {
      this.errorMessage = 'Please fill in both fields.';
      return;
    }
    this.authService.login(this.user);
    
    this.authService.login(this.user);
  }
  populateTestData() {
    this.user.email = 'testuser22@example.com';
    this.user.password = 'TestPassword123';
 
  }  
}
