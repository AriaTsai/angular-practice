import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from './../cart.service';

import { products } from './../products';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail;
  constructor(
    private route: ActivatedRoute,
    private CartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params)
      this.productDetail = products[+params.get('productId')]
    })
  }

  addCart(item) {
    window.alert('Add To Cart!')
    this.CartService.addItem(item)
  }
}
