import { Component } from '@angular/core';

@Component({
  selector: 'app-c-resistencias',
  templateUrl: './c-resistencias.component.html',
  styleUrls: ['./c-resistencias.component.css']
})
export class CResistenciasComponent {
  linea1!:string;
  linea2!:string;
  linea3!:string;
  tolerancia!:string;

  valor!:number;
  valorMaximo!:number;
  valorMinimo!:number;

  td_style!:string;
  l1!:number;
  l2!:number;
  l3!:number;
  l4!:number;
  banda1!:string;
  banda2!:string;
  banda3!:string;
  banda4!:string;

calculoResistencia(){

  if (this.linea1=='black'){
  this.l1=0;
  this.banda1='Negro'
  this.td_style=this.linea1;
}
else if (this.linea1=='chocolate'){
  this.l1=1
  this.banda1='Marron'
}
                
else if (this.linea1=='red'){
  this.l1=2
  this.banda1='Rojo'
}
else if (this.linea1=='orange'){
  this.l1=3
  this.banda1='Naranja'
}           
else if(this.linea1=='yellow'){
  this.l1=4
    this.banda1='Amarillo'
}                
else if (this.linea1=='green'){
  this.l1=5
    this.banda1='Verde'
}
else if (this.linea1=='blue'){
  this.l1=6
  this.banda1='Azul'
}
else if(this.linea1=='purple'){
  this.l1=7
  this.banda1='Violeta'
}
else if(this.linea1=='grey'){
  this.l1=8
  this.banda1='Gris'
}
else if(this.linea1=='white'){
  this.l1=9
  this.banda1='Blanco'
}
                
            
            if (this.linea2=='black'){
              this.l2=0
                this.banda2='Negro'
            }
            else if(this.linea2=='chocolate'){
              this.l2=1
              this.banda2='Marron'
            }
            else if(this.linea2=='red'){
              this.l2=2
              this.banda2='Rojo'
            }
            else if(this.linea2=='orange'){
              this.l2=3
              this.banda2='Naranaja'
            }
            else if(this.linea2=='yellow'){
              this.l2=4
              this.banda2='Amarillo'
            }
            else if(this.linea2=='green'){
              this.l2=5
              this.banda2='Verde'
            }
            else if(this.linea2=='blue'){
              this.l2=6
              this.banda2='Azul'
            }
            else if(this.linea2=='purple'){
              this.l2=7
              this.banda2='Violeta'
            }
            else if(this.linea2=='grey'){
              this.l2=8
              this.banda2='Gris'
            }
            else if(this.linea2=='white'){
              this.l2=9
              this.banda2='Blanco'
            }

            
            if (this.linea3=='black'){
              this.l3=1
                this.banda3='Negro'
            }
            
            else if (this.linea3=='chocolate'){
              this.l3=10
              this.banda3='Marron'
            }
            else if (this.linea3=='red'){
              this.l3=100
              this.banda3='Rojo'
            }
            else if (this.linea3=='orange'){
              this.l3=1000
              this.banda3='Naranja'
            }
            else if (this.linea3=='yellow'){
              this.l3=10000
              this.banda3='Amarillo'
            }
            else if (this.linea3=='green'){
              this.l3=100000
              this.banda3='Verde'
            }
            else if (this.linea3=='blue'){
              this.l3=1000000
              this.banda3='Azul'
            }
            else if (this.linea3=='purple'){
              this.l3=10000000
              this.banda3='Violeta'
            }
            else if (this.linea3=='grey'){
              this.l3=100000000
              this.banda3='Gris'
            }
            else if (this.linea3=='white'){
              this.l3=1000000000
              this.banda3='Blanco'
            }
            else if (this.linea3=='gold'){
              this.l3=0.1
              this.banda3='Dorado'
            }
            else if (this.linea3=='silver'){
              this.l3=0.01
              this.banda3='Plateado'
            }

            if (this.tolerancia=='gold'){
            this.l4=5
            this.banda4='Dorado'
            }
            else if(this.tolerancia=='silver'){
            this.l4=10
            this.banda4='Plateado'
            }
            
            //calculo de la resistencia
            this.valor=(this.l1*10+this.l2)*this.l3;
            this.valorMaximo=this.valor+(this.valor*this.l4/100);
            this.valorMinimo=this.valor-(this.valor*this.l4/100);
}

}
