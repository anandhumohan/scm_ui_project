import { Injectable } from '@angular/core';
import {Product} from "./model/product.model";
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];

  constructor() {
  }

  getProducts(client: HttpClient): Observable<Product[]> {
    return client.get<Product[]>("http://localhost:8084/api/product");
  }

  createProduct(newProduct: Product) {

  }
}
