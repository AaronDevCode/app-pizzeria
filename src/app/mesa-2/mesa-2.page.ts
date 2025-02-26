import { Component, OnInit } from '@angular/core';
import { PizzeriaService } from '../services/pizzeria.service';
import { PedidoMesa1, PedidoMesa2 } from '../interfaces/pedido.interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mesa-2',
  templateUrl: './mesa-2.page.html',
  styleUrls: ['./mesa-2.page.scss'],
  standalone: false,
})
export class Mesa2Page implements OnInit {
  
  pizzaMesaDos: PedidoMesa2[] = [];
  pizza: string = '';

  constructor(private pizzeria: PizzeriaService, private alertController: AlertController) {
  }

  ngOnInit() {
    this.pizzaMesaDos = this.pizzeria.obtenerPedidosMesa2();
  }

  ionViewWillEnter() {
    console.log('HomePage ionViewWillEnter');
  }

  //Metodo para odenar pizza 
  ordenarPizza() {
    //Crear objeto pedidoPizza
    const pedidoPizza: PedidoMesa2 = {
      id: Date.now().toString(),
      mesa: 'Mesa 2',
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
      this.pizzeria.agregarPedidoMesa2(pedidoPizza);
      this.pizzaMesaDos = this.pizzeria.obtenerPedidosMesa2();
      return this.pizza = '';
    }
  }

  //Metodo para eliminar el pedido de la lista 
  eliminarPedido(pedido: PedidoMesa2) {
    this.pizzeria.eliminarPedidoMesa2(pedido);
    this.pizzaMesaDos = this.pizzeria.obtenerPedidosMesa2();
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