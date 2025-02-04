
import { MaterialModule } from '../../../app-angularmaterial';
import { Component } from '@angular/core';
import { AppCommonModule } from '../../../app-commonmodule';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports:[MaterialModule,AppCommonModule]
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    role:'Buyer'
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar  // Inject MatSnackBar for notifications
  ) {}

  register() {
    // Perform form validation
    if (!this.user.name || !this.user.email || !this.user.password || !this.user.phoneNumber) {
      this.snackBar.open('All fields are required!', 'Close', { duration: 3000 });
      return;
    }
  
    // Make HTTP POST request to the backend
    this.http.post('http://localhost:5000/api/register', this.user)
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
  validatePhoneNumber(phoneNumber: string): boolean {
    return /^\d{10}$/.test(phoneNumber); // Check if the phone number is a valid 10-digit number
  }
  populateTestData() {
    this.user.name = 'testuser@example.com';
    this.user.email = 'testuser22@example.com';
    this.user.password = 'TestPassword123';
    this.user.phoneNumber="1123324325";
    this.user.role== 'Buyer';
  }

  
}
