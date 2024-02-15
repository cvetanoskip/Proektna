
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { PRODUCTS } from '../../database';
// import { Product } from '../module/klasa';

// @Component({
//   selector: 'app-protein',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './protein.component.html',
//   styleUrl: './protein.component.css'
// })
// export class ProteinComponent {
//   PRODUCTS: any[] = PRODUCTS;
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../../database';
import { Product } from '../module/klasa';

@Component({
  selector: 'app-protein',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './protein.component.html',
  styleUrl: './protein.component.css'
})
export class ProteinComponent {
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
  
  getProductImage(productName: string): string {
    let imagePath = '';
    switch (productName) {
      case 'Dymatize Protein':
        imagePath = 'assets/Proteini/dymatizeElite.png';
        break;
      case 'Scitec Protein':
        imagePath = 'assets/Proteini/scitec.png';
        break;
      case 'Biotech Protein':
        imagePath = 'assets/Proteini/biotech.png';
        break;
      // Add more cases for other products if needed
      default:
        imagePath = ''; // Default image path
    }
    return imagePath;
  }
}
