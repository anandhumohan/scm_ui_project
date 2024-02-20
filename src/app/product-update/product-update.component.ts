import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Product} from "../model/product.model";
import {ProductService} from "../product.service";
import { HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    HttpClientModule
  ],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit{

  newProduct:Product = {
    id:0,
    name: '',
    description:'',
    price:0
  }

  constructor(private productService: ProductService, private router: Router,private httpClient:HttpClient, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.productService.getProductById(productId,this.httpClient).subscribe({
        next: (product) => {
          this.newProduct = product;
        },
        error: (error) => console.error('Error fetching product details:', error)
      });
    }
  }

  updateProduct() {
    this.productService.updateService(this.newProduct, this.httpClient).subscribe({
      next: (product) => {
        console.log('Product updated successfully', product);
        this.router.navigate(['/products']);
      },
      error: (error) => {
        console.error('There was an error creating the product', error);
      },
    });
  }
}
