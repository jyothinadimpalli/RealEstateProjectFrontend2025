import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tileLayer, latLng, marker, icon, Map } from 'leaflet';
import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../app-angularmaterial';
import { AppCommonModule } from '../../../../app-commonmodule';
@Component({
  selector: 'app-property-card-view',
  templateUrl: './property-card-view.component.html',
  styleUrls: ['./property-card-view.component.css'],
  imports:[CommonModule,MaterialModule,AppCommonModule],
})
export class PropertyCardViewComponent implements OnInit {
  propertyId: string | null = null;
  propertyDetails: any;
   // Google Maps configuration
   zoom = 14;
   center: google.maps.LatLngLiteral = { lat:0,lng:0}; // Default center (Hyderabad)
   markerOptions: google.maps.MarkerOptions = { draggable: false };

  constructor(private route: ActivatedRoute, private authService: AuthService,    
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.propertyId = params.get('id');
      if (this.propertyId) {
        this.authService.getPropertyById(this.propertyId).subscribe((data: any) => {
          this.propertyDetails = data;
          if (this.propertyDetails.location) {
            this.center = {
              lat:17.4933,
              lng: 78.3914,
            };
          }
        });
      }
    });
  }
}


