import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../app-angularmaterial';
import { PropertyComponent } from './property/property.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports:[CommonModule,MaterialModule]
})
export class DashboardComponent   {
  properties: any[] = []; // Store property data

  constructor(private http: HttpClient) {}

  
}
