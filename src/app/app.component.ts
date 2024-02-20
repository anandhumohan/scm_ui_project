import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import {ProductListComponent} from "./product-list/product-list.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {ProductUpdateComponent} from "./product-update/product-update.component";


@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, NavigationComponent, ProductListComponent, CreateProductComponent,ProductUpdateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scm-project';
}
