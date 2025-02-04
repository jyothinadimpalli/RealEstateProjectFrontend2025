import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../app-angularmaterial';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports:[CommonModule,MaterialModule]
})
export class DashboardComponent implements OnInit {
  properties: any[] = []; // Store property data

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProperties();
  }

  fetchProperties() {
    this.http.get<any[]>('http://localhost:5000/properties')
      .subscribe(
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
