import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CdistanciasComponent } from "./cdistancias/cdistancias.component";
import { CResistenciasComponent } from "./c-resistencias/c-resistencias.component";
import { CcinepolisComponent } from "./ccinepolis/ccinepolis.component";


const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'Distancias', component: CdistanciasComponent, data: {title: 'Distancias'}, },
{path: 'Resistencias', component: CResistenciasComponent},
{path: 'Cinepolis', component: CcinepolisComponent}

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule{}