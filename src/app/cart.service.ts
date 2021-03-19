import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //items: any[] = []
  items = [];


  constructor(

  ) { }

  addItem(item) {
    this.items.push(item)
  }

  getItems() {
    return this.items
  }

  deleteItem(idx) {
    this.items.splice(idx, 1)
  }

}
