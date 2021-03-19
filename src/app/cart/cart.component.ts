import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  nameControl: FormControl;
  addressControl: FormControl;

  get cartList() {
    return this.CartService.getItems()
  }

  constructor(
    private CartService: CartService,
    private FormBuilder: FormBuilder,
    private router: Router
  ) {

    this.checkoutForm = this.FormBuilder.group({
      name: [null],
      address: null
    })

    // ================Validator====================


    // this.checkoutForm = this.FormBuilder.group({
    //   name: [null, [Validators.required, Validators.maxLength(5)]],
    //   address: null
    // })

    // ==================Includ Group==================

    // this.checkoutForm = this.FormBuilder.group({
    //   name: { value: '123', disabled: true },
    //   address: null,
    //   connection: this.FormBuilder.group({
    //     phone: [null, Validators.required],
    //     cellPhone: ['0912345678', Validators.required]
    //   })
    // });


    // ==================Includ Array==================

    // this.checkoutForm = this.FormBuilder.group({
    //   name: { value: '123', disabled: true },
    //   address: null,
    //   connection: this.FormBuilder.group({
    //     phone: [null, Validators.required],
    //     cellPhone: this.FormBuilder.array([
    //       this.FormBuilder.group({
    //         number: ['0912345678', Validators.required],
    //         user: [null, Validators.required]
    //       })])
    //   })
    // })

    // ====================================

    // this.checkoutForm = new FormGroup({
    //   name: new FormControl('', [], []),
    //   address: new FormControl(null),
    //   connetion: new FormGroup({}),
    // })


    // this.nameControl = new FormControl(null);
    // this.addressControl = new FormControl(null);
    // this.checkoutForm = new FormGroup({
    //   name: this.nameControl,
    //   address: this.addressControl,
    // })


    console.log(this.checkoutForm)
    console.log(this.checkoutForm.get('name'));
    // console.log(this.checkoutForm.get('connection.cellPhone'));
  }


  ngOnInit(): void {
  }

  onSubmit(customerData) {
    this.CartService.clearCart();
    this.checkoutForm.reset();
    console.debug(customerData)
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

  toCheck(form: any, name: any, address: any) {
    console.log(form, name, address);
  }
}
