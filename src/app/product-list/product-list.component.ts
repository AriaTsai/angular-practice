import { Component } from '@angular/core';

import { ProductsService, IProduct } from './../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IProduct[];

  constructor(
    private ProductsService: ProductsService
  ) {
    this.products = this.ProductsService.productList
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
