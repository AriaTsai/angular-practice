import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduct } from './products';

export interface IShipping {
  type: string,
  price: number
}

@Injectable({ //提供服務
  providedIn: 'root' //註冊
})
export class CartService {

  items: IProduct[] = [];

  constructor(
    private http: HttpClient,
  ) {
  }

  addToCart(product: IProduct) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  removeItem(idx: number) {
    this.items.splice(idx, 1)
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  shippingPrice() {
    return this.http.get<IShipping>('/assets/shipping.json')
  }

}
