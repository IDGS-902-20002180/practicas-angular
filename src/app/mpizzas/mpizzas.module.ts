import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpizzasComponent } from '../cpizzas/cpizzas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CpizzasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CpizzasComponent
  ]
})
export class MpizzasModule { }
