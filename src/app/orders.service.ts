import { IProduct } from './products';
import { Injectable } from '@angular/core';

interface IContact {
  type: string,
  numbers: string,
}

export interface IOrder {
  name: string,
  address: string,
  contaction: IContact[],
  cartList: IProduct[],
  dateTime: string
}

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  orders: IOrder[] = []

  constructor() {}

  addOrders(order: IOrder) {
    this.orders.push(order)
  }

  getOrders() {
    return this.orders
  }

}
