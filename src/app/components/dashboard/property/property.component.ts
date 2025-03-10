import { Component } from '@angular/core';
import { PropertyCardComponent } from './property-card/property-card.component';
import { MaterialModule } from '../../../app-angularmaterial';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { Property } from '../../../models/property';

@Component({
  selector: 'app-property',
  imports: [PropertyCardComponent, MaterialModule, CommonModule],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css',
})
export class PropertyComponent {
  properties: Property[]=[]; // Store property data

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.fetchProperties();
  }

  fetchProperties() {
    this.authService.fetchProperties().subscribe(
      (data) => {
        this.properties = data;
        console.log('Properties fetched:', this.properties);
      },
      (error) => {
        console.error('Error fetching properties:', error);
      }
    );
  }
}
