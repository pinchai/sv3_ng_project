import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product: any;
  @Output() messageEvent = new EventEmitter<any>();

  sendMessage(product: any) {
    this.messageEvent.emit(product);
  }
}
