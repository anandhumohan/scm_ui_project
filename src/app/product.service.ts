import { Injectable } from '@angular/core';
import {Product} from "./model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200 },
    // Add more mock products
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  createProduct(newProduct: Product) {
    
  }
}
