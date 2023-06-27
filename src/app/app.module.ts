import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MResistenciasModule } from './m-resistencias/m-resistencias.module';
import { McinepolisModule } from './mcinepolis/mcinepolis.module';
import { MdistanciasModule } from './mdistancias/mdistancias.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
        //CcinepolisComponent,
    //CResistenciasComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MResistenciasModule,
    McinepolisModule,
    MdistanciasModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
