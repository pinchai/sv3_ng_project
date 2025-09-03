import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
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

