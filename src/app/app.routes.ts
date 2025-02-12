import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { PropertyCardViewComponent } from './components/dashboard/property/property-card-view/property-card-view.component';
import { PropertyCardComponent } from './components/dashboard/property/property-card/property-card.component';
import { PropertyComponent } from './components/dashboard/property/property.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'propertyDashboard', 
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],  // ✅ Use canActivateChild here
    children: [
      { path: '', component: PropertyComponent },
      { path: 'property/:id', component: PropertyCardViewComponent }
    ] 
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
