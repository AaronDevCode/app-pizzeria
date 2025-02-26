import { Component, OnInit } from '@angular/core';
import { PizzeriaService } from '../services/pizzeria.service';
import { PedidoMesa3 } from '../interfaces/pedido.interface'; // Cambia la interfaz a PedidoMesa3
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mesa-3', // Cambia el selector a app-mesa-3
  templateUrl: './mesa-3.page.html', // Cambia la ruta del template si es necesario
  styleUrls: ['./mesa-3.page.scss'], // Cambia la ruta del archivo de estilos si es necesario
  standalone: false,
})
export class Mesa3Page implements OnInit {
  // Cambia el nombre de la lista de pedidos
  pizzaMesaTres: PedidoMesa3[] = [];
  pizza: string = '';

  constructor(
    private pizzeria: PizzeriaService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Obtiene los pedidos de la Mesa 3
    this.pizzaMesaTres = this.pizzeria.obtenerPedidosMesa3();
  }

  ionViewWillEnter() {
    console.log('Mesa3Page ionViewWillEnter');
  }

  // Método para ordenar pizza
  ordenarPizza() {
    // Crear objeto pedidoPizza
    const pedidoPizza: PedidoMesa3 = {
      id: Date.now().toString(),
      mesa: 'Mesa 3', // Cambia a Mesa 3
      pizza: this.pizza,
    };

    // Validaciones
    if (this.pizza === '') {
      this.alerta('Error', 'Por favor, selecciona una pizza.');
      return;
    } else {
      this.alerta('Pedido Realizado', 'Tu pedido ha sido ordenado');
      this.pizzeria.agregarPedidoMesa3(pedidoPizza); // Cambia a agregarPedidoMesa3
      this.pizzaMesaTres = this.pizzeria.obtenerPedidosMesa3(); // Cambia a obtenerPedidosMesa3
      return (this.pizza = '');
    }
  }

  // Método para eliminar el pedido de la lista
  eliminarPedido(pedido: PedidoMesa3) {
    this.pizzeria.eliminarPedidoMesa3(pedido); // Cambia a eliminarPedidoMesa3
    this.pizzaMesaTres = this.pizzeria.obtenerPedidosMesa3(); // Cambia a obtenerPedidosMesa3
  }

  // Método para mostrar alerta
  async alerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}