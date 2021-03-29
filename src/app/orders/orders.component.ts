import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService, IOrder } from '../orders.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @ViewChild('paginator', { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  orderList: IOrder[];
  dataSource = new MatTableDataSource<IOrder>();
  displayedColumns: string[];

  constructor(
    private ordersService: OrdersService,
  ) { }

  ngOnInit(): void {
    this.getOrder();
    this.dataSource.data = this.orderList;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.displayedColumns = Object.keys(this.orderList[0]);
    this.displayedColumns.unshift('No');
  }

  getOrder() {
    this.orderList = this.ordersService.getOrders();
  }

}
