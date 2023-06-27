import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CcinepolisComponent } from '../ccinepolis/ccinepolis.component';


@NgModule({
  declarations: [
    CcinepolisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ], 
  exports: [
    CcinepolisComponent
  ]
})
export class McinepolisModule { }
