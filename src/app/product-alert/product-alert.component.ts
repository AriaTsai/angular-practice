import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  @Input() product;
  @Output() msgEvent = new EventEmitter()
  @Output() item = new EventEmitter<string>()
  constructor(

  ) { }

  ngOnInit(): void {

  }

  alert(val: string) {
    console.log(val)
    this.msgEvent.emit(val)
  }

}
