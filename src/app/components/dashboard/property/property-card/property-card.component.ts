import { CommonModule } from '@angular/common';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../../../app-angularmaterial';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../../../../models/property';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
  imports:[CommonModule,MaterialModule],
  schemas: [NO_ERRORS_SCHEMA], // Add this to suppress schema errors
})
export class PropertyCardComponent {
constructor(private route: ActivatedRoute, private router: Router) {}
    propertyId: string = "";

  @Input() property!: Property; // Add this to accept `property` as input
    viewProperty() {
      this. propertyId =this.property?._id || "";
      console.log('Navigating to Property ID:', this.property?._id); // Debugging
      this.router.navigate(['property',this. propertyId ], { relativeTo: this.route });

    }
}
