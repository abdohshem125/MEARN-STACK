import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProduct } from './table-product';

describe('TableProduct', () => {
  let component: TableProduct;
  let fixture: ComponentFixture<TableProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
