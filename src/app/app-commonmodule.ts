

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule,FormsModule,CommonModule, 

  ],
  exports: [
RouterModule,FormsModule,CommonModule, 
  ]
})
export class AppCommonModule { }
