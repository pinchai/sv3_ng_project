import {Injectable} from '@angular/core';

declare const Swal: any;

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart_list: any[] = []

  constructor() {
    let cart = localStorage.getItem('cart_list') ?? '[]';
    this.cart_list = JSON.parse(cart);
  }

  addToCart(product: any) {
    let dpp_index = this.cart_list.findIndex(item => item.id === product.id)
    if (dpp_index > -1) {
      this.cart_list[dpp_index].qty++;
    } else {
      this.cart_list.push(product)
    }
    localStorage.setItem('cart_list', JSON.stringify(this.cart_list))
  }

  getCartList() {
    return this.cart_list;
  }

  getCartCount() {
    return this.cart_list.length;
  }

  getCartTotal() {
    return this.cart_list.reduce((acc, item) => acc + item.price, 0);
  }

  cartRemove(product: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this item from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.cart_list = this.cart_list.filter(item => item.id !== product.id)
        localStorage.setItem('cart_list', JSON.stringify(this.cart_list))
      }
    });
  }

  addCartQty(index: number) {
    this.cart_list[index].qty++;
    localStorage.setItem('cart_list', JSON.stringify(this.cart_list))
  }

  removeCartQty(index: number) {
    if (this.cart_list[index].qty > 1) {
      this.cart_list[index].qty--;
      localStorage.setItem('cart_list', JSON.stringify(this.cart_list))
    }
  }

}
