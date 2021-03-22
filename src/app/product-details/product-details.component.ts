import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService, IProduct } from './../products.service';
//service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productList: IProduct[];
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private CartService: CartService,
    private ProductsService: ProductsService,
  ) {
    this.productList = this.ProductsService.productList
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = this.productList[+params.get('productId')]
    });
  }

  addToCart(product) {
    this.CartService.addToCart(product)
    window.alert('Your product has been added to the cart!')
  }


}
