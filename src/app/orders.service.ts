import { Injectable } from '@angular/core';

import { ProductsService, IProduct } from './products.service';

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

  constructor(
    private productsService: ProductsService
  ) {
    this.orders = this.generateFakeOrders(25);
  }

  addOrders(order: IOrder) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }

  getRandom(x: number) {
    return Math.floor(Math.random() * x);
  }

  private generateFakeOrders(num: number) {
    let list = [];
    let name = ['Ann', 'Ben', 'Tom', 'Andy'];
    let address = ['Taipei', 'Tainan', 'Taoyuan', 'Ameriaca', 'Canada'];
    let contaction: IContact[] = [{
      type: 'HOME',
      numbers: '123456789'
    }];

    for (let i = 0; i < num; i++) {
      let nameIdx = this.getRandom(name.length);
      let addressIdx = this.getRandom(address.length);
      list.push({
        name: name[nameIdx],
        address: address[addressIdx],
        contaction: contaction,
        cartList: this.productsService.generateFakeData(this.getRandom(4)+1),
        dateTime: new Date(2020,this.getRandom(11)+1, this.getRandom(27)+1, this.getRandom(11)+1)
      });
    }

    return list;

  }

}
