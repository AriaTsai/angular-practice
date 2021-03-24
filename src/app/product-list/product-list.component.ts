import { Component } from '@angular/core';

import { ProductsService, IProduct } from './../products.service';

import { includes, toLower, filter, trim } from 'lodash';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IProduct[];
  filterProducts: IProduct[];

  constructor(
    private ProductsService: ProductsService,
  ) {
    this.products = this.filterProducts = this.ProductsService.productList
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  searchInput(input: string) {
    this.filterProducts = trim(input) === ''
      ? this.products
      : this.searchProduct(input)
  }
  searchProduct(input: string) {
    return filter(this.products, (item: IProduct) => {
      return includes(toLower(item.name), toLower(input))
    })
  }
}
