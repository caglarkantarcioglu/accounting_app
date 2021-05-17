import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatRippleModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatRippleModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialDesignModule { }
