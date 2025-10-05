import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products: Iproduct[];
  category: Icategory[];
  selectedCategoryid = 0;
  totalOrderPrice: number = 0;

  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Dell laptop',
        price: 1234,
        quantity: 3,
        imgUrl: 'https://m.media-amazon.com/images/I/51gOR2+cqZL._AC_SX569_.jpg',
        catId: 1,
      },
      {
        id: 300,
        name: 'Dell laptop',
        price: 15488,
        quantity: 0,
        imgUrl: 'https://m.media-amazon.com/images/I/51gOR2+cqZL._AC_SX569_.jpg',
        catId: 1,
      },
      {
        id: 200,
        name: 'Dell TV',
        price: 1524,
        quantity: 4,
        imgUrl: 'https://m.media-amazon.com/images/I/51gOR2+cqZL._AC_SX569_.jpg',
        catId: 2,
      },
      {
        id: 400,
        name: 'Dell TV',
        price: 1524,
        quantity: 4,
        imgUrl: 'https://m.media-amazon.com/images/I/51gOR2+cqZL._AC_SX569_.jpg',
        catId: 2,
      },
      {
        id: 500,
        name: 'Dell tap',
        price: 1524,
        quantity: 4,
        imgUrl: 'https://m.media-amazon.com/images/I/51gOR2+cqZL._AC_SX569_.jpg',
        catId: 3,
      },
      {
        id: 600,
        name: 'Dell tap',
        price: 1524,
        quantity: 4,
        imgUrl: 'https://m.media-amazon.com/images/I/51gOR2+cqZL._AC_SX569_.jpg',
        catId: 3,
      },
    ];

    this.category = [
      { id: 1, name: 'laptop' },
      { id: 2, name: 'tv' },
      { id: 3, name: 'tablet' },
    ];
  }

  buy(count: string, price: number) {
    this.totalOrderPrice += +count * price;
  }

}
