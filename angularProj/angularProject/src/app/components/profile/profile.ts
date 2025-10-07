import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirProd } from '../../Directives/dir-prod';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, CommonModule ,DirProd],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  products: Iproduct[];
  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Dell laptop',
        price: 1234,
        quantity: 3,
        imgUrl: 'https://m.media-amazon.com/images/I/51gOR2+cqZL._AC_SX569_.jpg',
      },
      {
        id: 300,
        name: 'Dell laptop',
        price: 15488,
        quantity: 0,
        imgUrl: 'https://m.media-amazon.com/images/I/51gOR2+cqZL._AC_SX569_.jpg',
      },
      {
        id: 200,
        name: 'Dell TV',
        price: 1524,
        quantity: 4,
        imgUrl: 'https://m.media-amazon.com/images/I/51gOR2+cqZL._AC_SX569_.jpg',
      },
      {
        id: 400,
        name: 'Dell TV',
        price: 1524,
        quantity: 4,
        imgUrl: 'https://m.media-amazon.com/images/I/51gOR2+cqZL._AC_SX569_.jpg',
      },
      {
        id: 500,
        name: 'Dell tap',
        price: 1524,
        quantity: 4,
        imgUrl: 'https://m.media-amazon.com/images/I/51gOR2+cqZL._AC_SX569_.jpg',
      },
      {
        id: 600,
        name: 'Dell tap',
        price: 1524,
        quantity: 4,
        imgUrl: 'https://m.media-amazon.com/images/I/51gOR2+cqZL._AC_SX569_.jpg',
      },
    ];
  }
}
