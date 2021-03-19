import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  test: string;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  toCheck(input1: any, input2: any, input3: any, alert: any) {
    console.log(input1);
    console.log(input2);
    console.log(input3);
    console.log(alert);
  }

}
