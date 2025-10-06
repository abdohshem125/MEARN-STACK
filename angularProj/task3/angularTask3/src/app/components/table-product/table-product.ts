import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
,
} from '@angular/core';
import { Product } from '../../models/product';
@Component({
  selector: 'app-table-product',
  imports: [],
  templateUrl: './table-product.html',
  styleUrl: './table-product.css',
})
export class TableProduct implements OnInit, OnChanges {
  @Input('products') productsData: Product[] = [];
  productsArr: Product[] = [];

  ngOnInit(): void {
    console.log('ngOnInit run');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges run ', changes);
    if (changes['productsData']) {
      this.productsArr = this.productsData;
      console.log('productsArr', this.productsArr);
    }
  }
}
