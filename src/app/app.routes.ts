import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from "./product-list/product-list.component";
import {CreateProductComponent} from "./create-product/create-product.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'create-product', component: CreateProductComponent},
];
