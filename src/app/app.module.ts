import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { CartComponent } from './cart/cart.component';

const routes = [
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  },
  {
    path: 'product',
    component: ProductListComponent,
  },
  {
    path: 'product/:productId',
    component: ProductDetailComponent
  },
  {
    path: 'book',
    component: BookListComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
]

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductAlertComponent,
    PhoneListComponent,
    BookListComponent,
    CartComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
