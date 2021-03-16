import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from './../products';
//service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private CartService: CartService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    });
  }

  addToCart(product) {
    this.CartService.addToCart(product)
    window.alert('Your product has been added to the cart!')
  }

}
