import { Component } from '@angular/core';

// Definimos las interfaces para los objetos Cliente y Pizza
export interface Cliente {
  nombre: string;
  direccion: string;
  telefono: string;
  fechaCompra: string;
}

export interface Pizza {
  tamano: string;
  ingredientes: string[];
  numeroPizzas: number;
  subtotal: number;
}
export interface Ingrediente {
  nombre: string;
  precioExtra: number;
  seleccionado: boolean;
}
@Component({
  selector: 'app-cpizzas',
  templateUrl: './cpizzas.component.html',
  styleUrls: ['./cpizzas.component.css']
})
export class CpizzasComponent {
  // Definimos variables
  cliente: Cliente = {
    nombre: '',
    direccion: '',
    telefono: '',
    fechaCompra: ''
  };
  pizzas: Pizza[] = []; 
  total: number = 0; 
  confirmacion: boolean = false; 
  tamanoPizza: string = '';
  fechaSeleccionada!: string;


  ingredientesPizza: Ingrediente[] = [
    { nombre: 'Jamón', precioExtra: 10, seleccionado: false },
    { nombre: 'Tocino', precioExtra: 10, seleccionado: false },
    { nombre: 'Piña', precioExtra: 10, seleccionado: false },
    { nombre: 'Champiñones', precioExtra: 10, seleccionado: false },
    { nombre: 'Salchicha', precioExtra: 10, seleccionado: false },
    { nombre: 'Morron', precioExtra: 10, seleccionado: false },
  ];
  arrayClientes: Cliente[] = [];
  ventasDelDia: any[]=[];
  totalVentasDia: number = 0;
  tamanoSeleccionado: string = '';





  obtenerIngredientesSeleccionados(): Ingrediente[] {
    return this.ingredientesPizza.filter(ingrediente => ingrediente.seleccionado);
  }

  numeroPizzas: number = 0; 
  // Método para agregar una pizza al arreglo de pizzas

  agregarPizza(tamano: string, ingredientes: Ingrediente[], numeroPizzas: number) {
    const subtotal = this.calcularSubtotal(tamano, ingredientes, numeroPizzas);
    const pizza: Pizza = {
      tamano: tamano,
      //aqui utilizamos el metodo filter para filtrar los ingredientes seleccionados mediante el nombre del ingrediente
      ingredientes: ingredientes.filter(ingrediente => ingrediente.seleccionado).map(ingrediente => ingrediente.nombre),
      numeroPizzas: numeroPizzas,
      subtotal: subtotal
    };
    this.pizzas.push(pizza); 
    this.actualizarTotal(); 
    console.log(this.pizzas);
    console.log(this.cliente);
    this.arrayClientes.push(this.cliente);
    console.log(this.arrayClientes);
  }

  quitarPizza(index: number) {
    // Método para quitar una pizza del arreglo de pizzas
    this.pizzas.splice(index, 1); 
    this.actualizarTotal(); 
  }

  calcularSubtotal(tamanoSeleccionado: string, ingredientes: Ingrediente[], numeroPizzas: number): number {
    let costoPizzaBase = 0;
  
    if (tamanoSeleccionado === 'Pequeña') {
      costoPizzaBase = 40; 
    } else if (tamanoSeleccionado === 'Mediana') {
      costoPizzaBase = 80;
    } else if (tamanoSeleccionado === 'Grande') {
      costoPizzaBase = 120;
    }
  
    const costoIngredientes = ingredientes.reduce((acc, ingrediente) => acc + ingrediente.precioExtra, 0);
  
    const subtotal = (costoPizzaBase + costoIngredientes) * numeroPizzas;
  
    return subtotal;
  }
  
  
  

  actualizarTotal() {
    // Método para actualizar el costo total del pedido
    this.total = this.pizzas.reduce((acc, pizza) => acc + pizza.subtotal, 0); 
  }
  limpiarDatos() {
    this.cliente = {
      nombre: '',
      direccion: '',
      telefono: '',
      fechaCompra: ''
    };
    this.pizzas = [];
    this.total = 0;
    this.confirmacion = false;
    this.tamanoPizza = '';
    this.ingredientesPizza = [
      { nombre: 'Jamón', precioExtra: 10, seleccionado: false },
      { nombre: 'Tocino', precioExtra: 10, seleccionado: false },
      { nombre: 'Piña', precioExtra: 10, seleccionado: false },
      { nombre: 'Champiñones', precioExtra: 10, seleccionado: false },
      { nombre: 'Salchicha', precioExtra: 10, seleccionado: false },
      { nombre: 'Morron', precioExtra: 10, seleccionado: false },
    ];
    this.numeroPizzas = 0;
  }
  confirmarPedido() {
    this.confirmacion = confirm(`El costo total del pedido es: ${this.total}. ¿Estás de acuerdo?`);
    const venta = {
      nombre: this.cliente.nombre,
      total: this.total,
      fecha: this.cliente.fechaCompra
    };
  
    this.ventasDelDia.push(venta);
  
    // Actualizar el total de ventas del día
    this.totalVentasDia = this.ventasDelDia.reduce((acc, venta) => acc + venta.total, 0);
    this.cliente = {
      nombre: '',
      direccion: '',
      telefono: '',
      fechaCompra: ''
    };
    this.pizzas = [];
    if (!this.confirmacion) {
      this.limpiarDatos();
      

    }
  }
  obtenerTotalVentasPorFecha(fecha: string): number {
    return this.ventasDelDia
      .filter(venta => venta.fecha === fecha)
      .reduce((total, venta) => total + venta.total, 0);
  }
  

  
}

