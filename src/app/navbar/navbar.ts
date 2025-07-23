import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  ngOnInit() {
    let cart_list = localStorage.getItem('cart_list') ?? '[]';
    this.cart_list = JSON.parse(cart_list);
  }
  cart_list: any[] = []
}

