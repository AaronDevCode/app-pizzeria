import { Component, OnInit } from '@angular/core';
import { PizzeriaService } from '../services/pizzeria.service';
import { PedidoMesa1 } from '../interfaces/pedido.interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mesa-1',
  templateUrl: './mesa-1.page.html',
  styleUrls: ['./mesa-1.page.scss'],
  standalone: false,
})
export class Mesa1Page implements OnInit {
  
  pizzaMesaUno: PedidoMesa1[] = [];
  pizza: string = '';

  constructor(private pizzeria: PizzeriaService, private alertController: AlertController) {
  }

  ngOnInit() {
    this.pizzaMesaUno = this.pizzeria.obtenerPedidosMesa1();
  }

  ionViewWillEnter() {
    console.log('HomePage ionViewWillEnter');
  }

  //Metodo para odenar pizza 
  ordenarPizza() {
    //Crear objeto pedidoPizza
    const pedidoPizza: PedidoMesa1 = {
      id: Date.now().toString(),
      mesa: 'Mesa 1',
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
      this.pizzeria.agregarPedidoMesa1(pedidoPizza);
      this.pizzaMesaUno = this.pizzeria.obtenerPedidosMesa1();
      return this.pizza = '';
    }
  }

  //Metodo para eliminar el pedido de la lista 
  eliminarPedido(pedido: PedidoMesa1) {
    this.pizzeria.eliminarPedidoMesa1(pedido);
    this.pizzaMesaUno = this.pizzeria.obtenerPedidosMesa1();
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