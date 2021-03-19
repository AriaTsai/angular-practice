import { Component, OnInit } from '@angular/core';

import { products } from './../products';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }

}
