import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar // ✅ Inject MatSnackBar
  ) {}

  login(user: any) {
    this.http.post(`${this.apiUrl}/login`, user).subscribe(
      (response: any) => {
        console.log('Login successful:', response);

        if (response.token) {
          localStorage.setItem('token', response.token); // ✅ Store token
          localStorage.setItem('isLoggedIn', 'true'); // ✅ Store login status
        }

        this.snackBar.open('Login successful!', 'Close', { duration: 3000 }); // ✅ Success message
        this.router.navigate(['/dashboard']); // ✅ Redirect to dashboard
      },
      (error) => {
        console.error('Login failed:', error);
        const errorMessage = error.error?.message || 'Login failed. Please try again.';
        
        this.snackBar.open(`Login failed: ${errorMessage}`, 'Close', { duration: 3000 }); // ✅ Error message
      }
    );
  }

  register(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  logout() {
    localStorage.removeItem('token'); // ✅ Clear token
    localStorage.removeItem('isLoggedIn'); // ✅ Clear login status
    this.snackBar.open('Logged out successfully!', 'Close', { duration: 3000 }); // ✅ Logout message
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
