import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {Product} from "../model/product.model";
import {MatLabel} from "@angular/material/form-field";
import { HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatButton,
    MatLabel,
    HttpClientModule
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  newProduct: Product = {
    id:0,
    name: '',
    description: '',
    price: 0
  };

  constructor(private productService: ProductService, private router: Router, private httpClient: HttpClient) {}

  createProduct(): void {
    // Optionally add validation logic here
    if (this.newProduct.name && this.newProduct.price > 0) {
      this.productService.createProduct(this.newProduct,this.httpClient).subscribe({
        next: (product) => {
          console.log('Product created successfully', product);
          this.router.navigate(['/products']);
        },
        error: (error) => {
          console.error('There was an error creating the product', error);
        },
      });
    } else {
      // Handle invalid product data case
      console.error('Invalid product data');
    }
  }
}
