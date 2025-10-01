import {Component} from '@angular/core';
import {ProductCard} from "../product-card/product-card";
import {TopSlider} from "../top-slider/top-slider";
import {CartService} from '../service/cart-service';
import {ProductService} from '../service/product-service';

@Component({
  selector: 'app-home',
  imports: [
    ProductCard,
    TopSlider
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(
    public cart_service: CartService,
    public product_service: ProductService,
  ) {}

  addToCart(item: any) {
    item.qty = 1
    this.cart_service.addToCart(item)
  }
}
