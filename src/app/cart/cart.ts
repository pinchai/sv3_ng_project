import { Component } from '@angular/core';
import {CartService} from '../service/cart-service';
import {CurrencyPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cart_service: CartService) {
  }

}
