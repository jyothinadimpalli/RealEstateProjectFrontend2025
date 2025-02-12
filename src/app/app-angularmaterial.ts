import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';  // Optional, if you need icons
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule ,
    MatCardModule ,MatToolbarModule // Optional, if you need icons
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule ,MatToolbarModule
      // Optional, if you need icons
  ]
})
export class MaterialModule { }
