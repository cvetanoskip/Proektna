import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../../database';
import { Product } from '../module/klasa';

@Component({
  selector: 'app-kreatin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kreatin.component.html',
  styleUrl: './kreatin.component.css'
})
export class KreatinComponent {
  produkti: Product[] = PRODUCTS;
  cartItems: any[] = [];

  addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }
  
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  

  getProductImage(imageUrl: string): string {
    return imageUrl;
  }
}
