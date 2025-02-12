import { CommonModule } from '@angular/common';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../../../app-angularmaterial';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
  imports:[CommonModule,MaterialModule],
  schemas: [NO_ERRORS_SCHEMA], // Add this to suppress schema errors
})
export class PropertyCardComponent {
constructor(private route: ActivatedRoute, private router: Router) {}
    propertyId: string | null = null;

  @Input() property: any; // Add this to accept `property` as input
    viewProperty(id: string) {
      console.log('Navigating to Property ID:', id); // Debugging
      this.router.navigate(['property',id], { relativeTo: this.route });

    }
}
