import { Component, OnInit } from '@angular/core';

import { OrdersService, IOrder } from './../orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderList: IOrder[]
  objectKeys = Object.keys

  constructor(
    private ordersService: OrdersService
  ) {
  }

  ngOnInit(): void {
    this.getOrderList()
  }

  getOrderList() {
    this.orderList = this.ordersService.getOrders()
  }

}
