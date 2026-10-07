import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Products } from '../../services/products';
import { Product } from '../../services/productsDataType';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  private productService = inject(Products);

  products = signal<Product[]>([]);

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products.set(data.products);
    });
  }
}
