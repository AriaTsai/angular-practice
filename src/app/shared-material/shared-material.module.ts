import { MatButtonModule } from '@angular/material/button'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [MatButtonModule]
})
export class SharedMaterialModule { }
