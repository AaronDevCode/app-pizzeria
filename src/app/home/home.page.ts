import { Component } from '@angular/core';
import { PizzeriaService } from '../services/pizzeria.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  totalPedidos: number = 0;
  totalPedidosMesa1: number = 0;
  totalPedidosMesa2: number = 0;
  totalPedidosMesa3: number = 0;
  totalPedidosMesa4: number = 0;

  constructor(private pizzeria: PizzeriaService) {}

  ngOnInit() {
    console.log('HomePage ngOnInit');
  }

  ionViewWillEnter() {
    console.log('HomePage ionViewWillEnter');
    this.totalPedidos = this.pizzeria.obtenerTotalPedidos();
    this.totalPedidosMesa1 = this.pizzeria.obtenerTotalPedidosMesa1();
    this.totalPedidosMesa2 = this.pizzeria.obtenerTotalPedidosMesa2();
    this.totalPedidosMesa3 = this.pizzeria.obtenerTotalPedidosMesa3();
    this.totalPedidosMesa4 = this.pizzeria.obtenerTotalPedidosMesa4();
  }

  ionViewDidEnter() {
    console.log('HomePage ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('HomePage ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('HomePage ionViewDidLeave');
  }
}