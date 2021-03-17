import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    private FormBuilder: FormBuilder,
    private router: Router
  ) {
    this.checkoutForm = this.FormBuilder.group({
      name: null,
      address: null
    })
  }


  ngOnInit(): void {
  }

  onSubmit(customerData) {
    this.CartService.clearCart();
    this.checkoutForm.reset();
    console.warn(customerData)
    this.router.navigate(['/'])
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
