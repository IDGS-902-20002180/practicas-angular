import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-ccinepolis',
  templateUrl: './ccinepolis.component.html',
  styleUrls: ['./ccinepolis.component.css']
})
export class CcinepolisComponent {
  nombre!: string;
  
  numCompradores!: number;
  numBoletos: number = 0;
  tarjeta!: string;
  
  precioBoleto: number = 12;
  respuesta!:string;
  total!:number;
  descuento1!:number;
  descuento2!:number;
  nCompradores!:number;

  cinepolisVenta(){
    //this.nCompradores=this.numCompradores*7;
    console.log(this.nCompradores);

    if (this.numCompradores == 1 && this.numBoletos >7){
      this.total=0;
      this.respuesta="No puede comprar mas de 7 boletos";
    }
    else{
      if(this.numBoletos>5){
        if(this.tarjeta=='si'){
        this.descuento1=(this.numBoletos*this.precioBoleto)*0.15; 
        console.log(this.descuento1);
        this.total=(this.numBoletos*this.precioBoleto)-this.descuento1;
        this.descuento2=this.total*0.10;
        this.total-=this.descuento2;
        console.log(this.total);
        }else{
          this.descuento1=(this.numBoletos*this.precioBoleto)*0.15; 
          console.log(this.descuento1);
          this.total=(this.numBoletos*this.precioBoleto)-this.descuento1;
          console.log(this.total);
        }
        
      }
      else if(this.numBoletos>=3 && this.numBoletos<=5){
        this.descuento1=(this.numBoletos*this.precioBoleto)*0.10;
        if(this.tarjeta=='si'){
          console.log(this.descuento1);
          this.total=(this.numBoletos*this.precioBoleto)-this.descuento1;
          this.descuento2=this.total*0.10;
          this.total-=this.descuento2;
          console.log(this.total);
          }else 
          {
            console.log(this.descuento1);
            this.total=(this.numBoletos*this.precioBoleto)-this.descuento1;
            console.log(this.total);
          }

        }
        else if(this.numBoletos>0 && this.numBoletos<=2){
          this.descuento1=(this.numBoletos*this.precioBoleto)*0.10;

          if(this.tarjeta=='si'){
            console.log(this.descuento1);
            this.total=(this.numBoletos*this.precioBoleto);
            this.descuento2=this.total*0.10;
            this.total-=this.descuento2;
            console.log(this.total);
            }else 
            {
              
              this.total=(this.numBoletos*this.precioBoleto);
              console.log(this.total);
            }
        }

        }

      }
    }

