import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MResistenciasModule } from './m-resistencias/m-resistencias.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MResistenciasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
