import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, FormArray, AbstractControl
} from '@angular/forms';

import { trim } from 'lodash';

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

  get contactionAry() {
    return this.checkoutForm.get('contaction') as FormArray
  }

  constructor(
    private CartService: CartService,
    private FormBuilder: FormBuilder,
  ) {

    this.checkoutForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(5), this.forbiddenSpaceValidator()]),
      address: new FormControl(null, [Validators.required, Validators.maxLength(50), this.forbiddenSpaceValidator()]),
      contaction: new FormArray([
        new FormGroup({
          type: new FormControl('Home', [Validators.required]),
          numbers: new FormControl(null, [Validators.required, Validators.maxLength(10), this.forbiddenSpaceValidator()]),
        })
      ])
    })

  }

  ngOnInit(): void {
  }

  forbiddenSpaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.dirty) {
        const forbidden = !trim(control.value)
        return forbidden ? { space: true } : null
      }
    };
  }

  removeItem(idx: number) {
    if (confirm('確認刪除?')) {
      this.CartService.removeItem(idx)
    }
  }

  addNumbers() {
    this.contactionAry.push(
      new FormGroup({
        type: new FormControl('Home', [Validators.required]),
        numbers: new FormControl(null, [Validators.required, Validators.maxLength(10), this.forbiddenSpaceValidator()]),
      })
    )
  }

  removeNumbers(idx: number) {
    if (this.contactionAry.controls.length > 1) {
      this.contactionAry.removeAt(idx)
    }
  }

  onSubmit(checkoutForm: FormGroup) {
    if (!checkoutForm.valid) {
      console.warn('submit failure')
    } else {
      console.log(checkoutForm.value)
      //this.CartService.clearCart();
      //this.checkoutForm.reset();
      //this.router.navigate(['/'])
    }
  }

}
