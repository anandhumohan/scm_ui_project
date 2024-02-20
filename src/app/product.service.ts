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

  createProduct(newProduct: Product, httpClient: HttpClient): Observable<Product> {
    return httpClient.post<Product>("http://localhost:8084/api/product", newProduct);
  }

  updateService(newProduct: Product, httpClient: HttpClient) {
    return httpClient.put<Product>("http://localhost:8084/api/product", newProduct);
  }

  getProductById(productId: number, httpClient: HttpClient): Observable<Product> {
    return httpClient.get<Product>(`http://localhost:8084/api/product/${productId}`);
  }
}
