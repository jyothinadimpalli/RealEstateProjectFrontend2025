import { Component } from '@angular/core';
import { PropertyCardComponent } from './property-card/property-card.component';
import { MaterialModule } from '../../../app-angularmaterial';
import { CommonModule } from '@angular/common';
import { ChunkPipe } from '../../../pipes/pipes/chunk.pipecomponent';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-property',
  imports: [PropertyCardComponent, MaterialModule, CommonModule, ChunkPipe],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css',
})
export class PropertyComponent {
  property: any[] = []; // Store property data

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.fetchProperties();
  }

  fetchProperties() {
    this.authService.fetchProperties().subscribe(
      (data) => {
        this.property = data;
        console.log('Properties fetched:', this.property);
      },
      (error) => {
        console.error('Error fetching properties:', error);
      }
    );
  }
}
