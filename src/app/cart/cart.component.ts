import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList;
  shippingList;
  information: FormGroup;
  example = new FormControl()
  hasError: boolean
  showMsg: boolean = false

  constructor(
    private CartService: CartService,
    private FormBuilder: FormBuilder,
    ) {


      // test
      // this.information = this.FormBuilder.group({
        //   name: [] = '',
        //   mobile: null,
        //   address: null
        // })

        this.information = this.FormBuilder.group({
          info: this.FormBuilder.group({
            name: [null, Validators.required, []],
            age: null,
            gender: null
          }),
          contaction: this.FormBuilder.group({
            mobile: this.FormBuilder.array([
              this.FormBuilder.group({
                mobileNumber: [null]
              })
            ]),
            address: null
          })
        })


        console.log(this.information)


      }

  ngOnInit(): void {
    this.cartList = this.CartService.getItems()
    console.log(this.cartList)
  }

  submit() {
    console.log(this.information)
    this.checkInformation()
  }

  deleteItem(idx) {
    if (confirm('確認刪除?')) {
      this.CartService.deleteItem(idx)
    }
  }


  checkInformation() {
    if (!this.information.valid) {
      this.showMsg = true

    }

  }

}
