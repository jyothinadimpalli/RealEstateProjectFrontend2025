import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar // ✅ Inject MatSnackBar
  ) {}

  login(user: any) {
    this.http.post(`${this.apiUrl}/auth/login`, user).subscribe(
      (response: any) => {
        console.log('Login successful:', response);

        if (response.token) {
          localStorage.setItem('token', response.token); // ✅ Store token
          localStorage.setItem('isLoggedIn', 'true'); // ✅ Store login status
        }

        this.snackBar.open('Login successful!', 'Close', { duration: 3000 }); // ✅ Success message
       this.router.navigate(['propertyDashboard']); // ✅ Redirect to dashboard
      },
      (error) => {
        console.error('Login failed:', error);
        const errorMessage = error.error?.message || 'Login failed. Please try again.';
        
        this.snackBar.open(`Login failed: ${errorMessage}`, 'Close', { duration: 3000 }); // ✅ Error message
      }
    );
  }

 register(user: any) {
    // Make HTTP POST request to the backend
    this.http.post(`${this.apiUrl}/auth/register`, user)
      .subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          this.snackBar.open('Registration successful!', 'Close', { duration: 3000 });
          this.router.navigate(['/login']);  // Redirect to the login page after successful registration
        },
        (error) => {
          console.error('Registration failed:', error.message);
          this.snackBar.open(`Registration failed: ${error.error.message}`, 'Close', { duration: 3000 });
        }
      );
  }

  logout() {
    localStorage.removeItem('token'); // ✅ Clear token
    localStorage.removeItem('isLoggedIn'); // ✅ Clear login status
    this.snackBar.open('Logged out successfully!', 'Close', { duration: 3000 }); // ✅ Logout message
    this.router.navigate(['/login']);
  }
// Fetch properties from the API
fetchProperties(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/properties`);
}

  // Get property by ID
  getPropertyById(id: string): Observable<Property> {
    return this.http.get<Property>(`${this.apiUrl}/properties/${id}`);
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
