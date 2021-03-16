import { Component, OnInit } from '@angular/core';
//service
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  get cartList() {
    return this.CartService.getItems()
  }
  constructor(
    private CartService: CartService,
  ) {
  }

  ngOnInit(): void {
    console.log(this.CartService.items)
  }

  removeItem(idx) {
    this.CartService.removeItem(idx)
    window.alert('Delete completed!')
  }

  clearCart() {
    this.CartService.clearCart()
    window.alert('All clear!')
  }

}
