import { Component, inject, signal } from '@angular/core';
import { Products } from './services/products';
import { Product } from './services/productsDataType';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private productService = inject(Products);

  products = signal<Product[]>([]);

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products.set(data.products);
    });
  }
}
