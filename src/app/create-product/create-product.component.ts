import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {Product} from "../model/product.model";
import {MatLabel} from "@angular/material/form-field";


@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatButton,
    MatLabel
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

  constructor(private productService: ProductService, private router: Router) {}

  createProduct(): void {
    // Check if the newProduct data is valid (you can add more validation logic here)

    // Create the product using the ProductService
    this.productService.createProduct(this.newProduct);

    // Navigate back to the product list after creating
    this.router.navigate(['/products']);
  }
}
