import { Component, signal } from '@angular/core';
import { FormProduct } from './components/form-product/form-product';
import { TableProduct } from './components/table-product/table-product';
import { Product } from './models/product';
@Component({
  selector: 'app-root',
  imports: [FormProduct, TableProduct],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products: Product[] = [];

  receiveProduct(product: Product) {
    this.products = [product, ...this.products];
  }
}
