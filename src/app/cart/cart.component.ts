import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title: string = '';
  checkoutForm: FormGroup;
  get cartList() {
    return this.CartService.getItems()
  }
  constructor(
    private CartService: CartService,
    private FormBuilder: FormBuilder
  ) {
    this.checkoutForm = this.FormBuilder.group({
      name: null,
      address: null
    })
  }
  ngOnInit(): void {
    console.log(this.CartService.items)
  }
  onSubmit(customerData) {
    console.log(customerData)
    this.CartService.clearCart();
    this.checkoutForm.reset();
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
