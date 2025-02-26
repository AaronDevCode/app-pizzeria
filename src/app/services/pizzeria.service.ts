import { Injectable } from '@angular/core';
import { PedidoMesa1, PedidoMesa2, PedidoMesa3, PedidoMesa4 } from '../interfaces/pedido.interface';

@Injectable({
  providedIn: 'root',
})
export class PizzeriaService {
  // Listas de pedidos para cada mesa
  ListaPedidoMesa1: PedidoMesa1[] = [];
  ListaPedidoMesa2: PedidoMesa2[] = [];
  ListaPedidoMesa3: PedidoMesa3[] = [];
  ListaPedidoMesa4: PedidoMesa4[] = [];

  constructor() {}

  // Métodos para agregar pedidos a cada mesa
  agregarPedidoMesa1(pedido: PedidoMesa1) {
    this.ListaPedidoMesa1.push(pedido);
  }

  agregarPedidoMesa2(pedido: PedidoMesa2) {
    this.ListaPedidoMesa2.push(pedido);
  }

  agregarPedidoMesa3(pedido: PedidoMesa3) {
    this.ListaPedidoMesa3.push(pedido);
  }

  agregarPedidoMesa4(pedido: PedidoMesa4) {
    this.ListaPedidoMesa4.push(pedido);
  }

  // Métodos para obtener pedidos de cada mesa
  obtenerPedidosMesa1(): PedidoMesa1[] {
    return this.ListaPedidoMesa1;
  }

  obtenerPedidosMesa2(): PedidoMesa2[] {
    return this.ListaPedidoMesa2;
  }

  obtenerPedidosMesa3(): PedidoMesa3[] {
    return this.ListaPedidoMesa3;
  }

  obtenerPedidosMesa4(): PedidoMesa4[] {
    return this.ListaPedidoMesa4;
  }

  // Métodos para eliminar pedidos de cada mesa
  eliminarPedidoMesa1(pedido: PedidoMesa1) {
    this.ListaPedidoMesa1 = this.ListaPedidoMesa1.filter((p) => p.id !== pedido.id);
  }

  eliminarPedidoMesa2(pedido: PedidoMesa2) {
    this.ListaPedidoMesa2 = this.ListaPedidoMesa2.filter((p) => p.id !== pedido.id);
  }

  eliminarPedidoMesa3(pedido: PedidoMesa3) {
    this.ListaPedidoMesa3 = this.ListaPedidoMesa3.filter((p) => p.id !== pedido.id);
  }

  eliminarPedidoMesa4(pedido: PedidoMesa4) {
    this.ListaPedidoMesa4 = this.ListaPedidoMesa4.filter((p) => p.id !== pedido.id);
  }

  // Métodos para obtener el total de pedidos por mesa
  obtenerTotalPedidosMesa1(): number {
    return this.ListaPedidoMesa1.length;
  }

  obtenerTotalPedidosMesa2(): number {
    return this.ListaPedidoMesa2.length;
  }

  obtenerTotalPedidosMesa3(): number {
    return this.ListaPedidoMesa3.length;
  }

  obtenerTotalPedidosMesa4(): number {
    return this.ListaPedidoMesa4.length;
  }

  // Método para obtener el total de pedidos en todas las mesas
  obtenerTotalPedidos(): number {
    return (
      this.ListaPedidoMesa1.length +
      this.ListaPedidoMesa2.length +
      this.ListaPedidoMesa3.length +
      this.ListaPedidoMesa4.length
    );
  }
}