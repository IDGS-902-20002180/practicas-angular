import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CdistanciasComponent } from '../cdistancias/cdistancias.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    CdistanciasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  exports: [
    CdistanciasComponent
  ]
})
export class MdistanciasModule { }
