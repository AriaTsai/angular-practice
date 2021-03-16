import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ //提供服務
  providedIn: 'root' //註冊
})
export class CartService {
  
  items = [];

  constructor(
    private http: HttpClient,
  ) { }

  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  removeItem(idx) {
    this.items.splice(idx, 1)
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  shippingPrice() {
    return this.http.get('/assets/shipping.json')
  }

}
