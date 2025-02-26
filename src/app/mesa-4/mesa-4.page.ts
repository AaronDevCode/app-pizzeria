import { Component, OnInit } from '@angular/core';
import { PizzeriaService } from '../services/pizzeria.service';
import { PedidoMesa4 } from '../interfaces/pedido.interface'; // Cambia la interfaz a PedidoMesa3
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mesa-4',
  templateUrl: './mesa-4.page.html',
  styleUrls: ['./mesa-4.page.scss'],
  standalone: false,
})
export class Mesa4Page implements OnInit {

  pizzaMesaCuatro: PedidoMesa4[] = [];
    pizza: string = '';
  
    constructor(private pizzeria: PizzeriaService, private alertController: AlertController) {
    }
  
    ngOnInit() {
      this.pizzaMesaCuatro = this.pizzeria.obtenerPedidosMesa4();
    }
  
    ionViewWillEnter() {
      console.log('HomePage ionViewWillEnter');
    }
  
    //Metodo para odenar pizza 
    ordenarPizza() {
      //Crear objeto pedidoPizza
      const pedidoPizza: PedidoMesa4 = {
        id: Date.now().toString(),
        mesa: 'Mesa 4',
        pizza: this.pizza,
      };
  
      //Validaciones
      //Si no se selecciona una pizza muestra error y no agrega el pedido a la lista 
      if (this.pizza === '') {
        this.alerta('Error', 'Por favor, selecciona una pizza.');
        return;
      }
      //Caso contrario
      //si se selecciona la pizza, se agrega el pedido a la lista y muestra mensaje de exito
      else {
        this.alerta('Pedido Realizado', 'Tu pedido ha sido ordenado');
        this.pizzeria.agregarPedidoMesa4(pedidoPizza);
        this.pizzaMesaCuatro = this.pizzeria.obtenerPedidosMesa4();
        return this.pizza = '';
      }
    }
  
    //Metodo para eliminar el pedido de la lista 
    eliminarPedido(pedido: PedidoMesa4) {
      this.pizzeria.eliminarPedidoMesa4(pedido);
      this.pizzaMesaCuatro = this.pizzeria.obtenerPedidosMesa4();
    }
  
    //Metodo para mostrar alerta 
    async alerta(header: string, message: string) {
      const alert = await this.alertController.create({
        header: header,
        message: message,
        buttons: ['OK'],
      });
      await alert.present();
    }
  
}
