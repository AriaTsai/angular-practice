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

  constructor() {
    this.orders = [ { "name": "Ann", "address": "taipei", "contaction": [ { "type": "Home", "numbers": "0123456789" } ], "cartList": [ { "name": "T-shirt XS Black", "price": 3000, "description": "this is T-shirt XS Black" } ], "dateTime": "2021-03-28T11:10:17.478Z" }, { "name": "Ben", "address": "America", "contaction": [ { "type": "Home", "numbers": "456456456" } ], "cartList": [ { "name": "T-shirt XS White", "price": 9000, "description": "this is T-shirt XS White" }, { "name": "T-shirt XS Yellow", "price": 7000, "description": "this is T-shirt XS Yellow" } ], "dateTime": "2021-03-28T11:10:48.676Z" },{ "name": "Ann", "address": "taipei", "contaction": [ { "type": "Home", "numbers": "0123456789" } ], "cartList": [ { "name": "T-shirt XS Black", "price": 3000, "description": "this is T-shirt XS Black" } ], "dateTime": "2021-03-28T11:10:17.478Z" }, { "name": "Ben", "address": "America", "contaction": [ { "type": "Home", "numbers": "456456456" } ], "cartList": [ { "name": "T-shirt XS White", "price": 9000, "description": "this is T-shirt XS White" }, { "name": "T-shirt XS Yellow", "price": 7000, "description": "this is T-shirt XS Yellow" } ], "dateTime": "2021-03-28T11:10:48.676Z" },{ "name": "Ann", "address": "taipei", "contaction": [ { "type": "Home", "numbers": "0123456789" } ], "cartList": [ { "name": "T-shirt XS Black", "price": 3000, "description": "this is T-shirt XS Black" } ], "dateTime": "2021-03-28T11:10:17.478Z" }, { "name": "Ben", "address": "America", "contaction": [ { "type": "Home", "numbers": "456456456" } ], "cartList": [ { "name": "T-shirt XS White", "price": 9000, "description": "this is T-shirt XS White" }, { "name": "T-shirt XS Yellow", "price": 7000, "description": "this is T-shirt XS Yellow" } ], "dateTime": "2021-03-28T11:10:48.676Z" },{ "name": "Ann", "address": "taipei", "contaction": [ { "type": "Home", "numbers": "0123456789" } ], "cartList": [ { "name": "T-shirt XS Black", "price": 3000, "description": "this is T-shirt XS Black" } ], "dateTime": "2021-03-28T11:10:17.478Z" }, { "name": "Ben", "address": "America", "contaction": [ { "type": "Home", "numbers": "456456456" } ], "cartList": [ { "name": "T-shirt XS White", "price": 9000, "description": "this is T-shirt XS White" }, { "name": "T-shirt XS Yellow", "price": 7000, "description": "this is T-shirt XS Yellow" } ], "dateTime": "2021-03-28T11:10:48.676Z" },{ "name": "Ann", "address": "taipei", "contaction": [ { "type": "Home", "numbers": "0123456789" } ], "cartList": [ { "name": "T-shirt XS Black", "price": 3000, "description": "this is T-shirt XS Black" } ], "dateTime": "2021-03-28T11:10:17.478Z" }, { "name": "Ben", "address": "America", "contaction": [ { "type": "Home", "numbers": "456456456" } ], "cartList": [ { "name": "T-shirt XS White", "price": 9000, "description": "this is T-shirt XS White" }, { "name": "T-shirt XS Yellow", "price": 7000, "description": "this is T-shirt XS Yellow" } ], "dateTime": "2021-03-28T11:10:48.676Z" },{ "name": "Ann", "address": "taipei", "contaction": [ { "type": "Home", "numbers": "0123456789" } ], "cartList": [ { "name": "T-shirt XS Black", "price": 3000, "description": "this is T-shirt XS Black" } ], "dateTime": "2021-03-28T11:10:17.478Z" }, { "name": "Ben", "address": "America", "contaction": [ { "type": "Home", "numbers": "456456456" } ], "cartList": [ { "name": "T-shirt XS White", "price": 9000, "description": "this is T-shirt XS White" }, { "name": "T-shirt XS Yellow", "price": 7000, "description": "this is T-shirt XS Yellow" } ], "dateTime": "2021-03-28T11:10:48.676Z" },{ "name": "Ann", "address": "taipei", "contaction": [ { "type": "Home", "numbers": "0123456789" } ], "cartList": [ { "name": "T-shirt XS Black", "price": 3000, "description": "this is T-shirt XS Black" } ], "dateTime": "2021-03-28T11:10:17.478Z" }, { "name": "Ben", "address": "America", "contaction": [ { "type": "Home", "numbers": "456456456" } ], "cartList": [ { "name": "T-shirt XS White", "price": 9000, "description": "this is T-shirt XS White" }, { "name": "T-shirt XS Yellow", "price": 7000, "description": "this is T-shirt XS Yellow" } ], "dateTime": "2021-03-28T11:10:48.676Z" },{ "name": "Ann", "address": "taipei", "contaction": [ { "type": "Home", "numbers": "0123456789" } ], "cartList": [ { "name": "T-shirt XS Black", "price": 3000, "description": "this is T-shirt XS Black" } ], "dateTime": "2021-03-28T11:10:17.478Z" }, { "name": "Ben", "address": "America", "contaction": [ { "type": "Home", "numbers": "456456456" } ], "cartList": [ { "name": "T-shirt XS White", "price": 9000, "description": "this is T-shirt XS White" }, { "name": "T-shirt XS Yellow", "price": 7000, "description": "this is T-shirt XS Yellow" } ], "dateTime": "2021-03-28T11:10:48.676Z" },{ "name": "Ann", "address": "taipei", "contaction": [ { "type": "Home", "numbers": "0123456789" } ], "cartList": [ { "name": "T-shirt XS Black", "price": 3000, "description": "this is T-shirt XS Black" } ], "dateTime": "2021-03-28T11:10:17.478Z" }, { "name": "Ben", "address": "America", "contaction": [ { "type": "Home", "numbers": "456456456" } ], "cartList": [ { "name": "T-shirt XS White", "price": 9000, "description": "this is T-shirt XS White" }, { "name": "T-shirt XS Yellow", "price": 7000, "description": "this is T-shirt XS Yellow" } ], "dateTime": "2021-03-28T11:10:48.676Z" } ]
  }

  addOrders(order: IOrder) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }

}
