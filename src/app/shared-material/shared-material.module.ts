import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';

// Data table
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class SharedMaterialModule { }
