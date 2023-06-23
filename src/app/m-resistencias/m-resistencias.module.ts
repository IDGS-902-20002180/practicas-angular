import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CResistenciasComponent } from '../c-resistencias/c-resistencias.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CResistenciasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CResistenciasComponent
  ]
})
export class MResistenciasModule { }
