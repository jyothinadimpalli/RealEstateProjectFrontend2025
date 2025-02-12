import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-card-view',
  imports: [],
  templateUrl: './property-card-view.component.html',
  styleUrl: './property-card-view.component.css',
  //standalone: true,
})
export class PropertyCardViewComponent {

  constructor(private route: ActivatedRoute) {}
  propertyId: string | null = null;
  ngOnInit() {
    // Subscribe to paramMap to listen for changes
    this.route.paramMap.subscribe(params => {
      this.propertyId = params.get('id');
      console.log('Viewing property with ID:', this.propertyId);
    });
  }
}
