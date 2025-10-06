import { Component, EventEmitter, Output } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-form-product',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-product.html',
  styleUrl: './form-product.css',
})
export class FormProduct {
  @Output() sendProductEvent = new EventEmitter<Product>();
  id = 0;

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    disc: new FormControl('', [Validators.required]),
    imgUrl: new FormControl('', [Validators.required]),
    rate: new FormControl('', [Validators.required]),
  });

  display() {
    if (
      this.productForm.valid &&
      this.productForm.value['name'] &&
      this.productForm.value['disc'] &&
      this.productForm.value['imgUrl'] &&
      this.productForm.value['rate']
    ) {
      const product: Product = {
        id: ++this.id,
        name: this.productForm.value['name'],
        disc: this.productForm.value['disc'],
        imgUrl: this.productForm.value['imgUrl'],
        rate: this.productForm.value['rate'],
      };
      this.sendProductEvent.emit(product);
      this.productForm.reset();
    }
  }
}
