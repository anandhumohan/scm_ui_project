import {Component, OnInit} from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';
import {CommonModule} from "@angular/common";
import { Router } from '@angular/router';
import { HttpClientModule,  } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";

import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatRow,
  MatTable,
  MatTableModule,
} from "@angular/material/table";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatTable, MatRow, MatCell, MatColumnDef, MatHeaderCell, MatHeaderRow, MatTableModule, MatButton, MatIconButton, MatIcon, HttpClientModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    console.log('Component initialized');
    this.productService.getProducts(this.httpClient).subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: (error) => console.error('There was an error!', error)
    });
    console.log(this.products);
  }

  navigateToCreateProduct() {
    this.router.navigate(['/create-product']);
  }
}




