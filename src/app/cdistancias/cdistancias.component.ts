import { Component } from '@angular/core';

@Component({
  selector: 'app-cdistancias',
  templateUrl: './cdistancias.component.html',
  styleUrls: ['./cdistancias.component.css']
})
export class CdistanciasComponent {
  distanciax1!: number;
  distanciay1!: number;
  distanciax2!: number;
  distanciay2!: number;

  resultado!: number;

  calcularDistancia() {
    //formula de distancia entre dos puntos
    //d = raiz cuadrada de (x2 - x1)^2 + (y2 - y1)^2
    this.resultado = Math.sqrt(Math.pow(this.distanciax2 - this.distanciax1, 2) + Math.pow(this.distanciay2 - this.distanciay1, 2));
  }
}
