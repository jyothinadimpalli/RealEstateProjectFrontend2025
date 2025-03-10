

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [RouterModule,FormsModule,CommonModule, GoogleMapsModule

  ],
  exports: [
RouterModule,FormsModule,CommonModule,GoogleMapsModule
  ]
})
export class AppCommonModule { }
