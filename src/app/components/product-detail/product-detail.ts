import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Products } from '../../services/products';
import { Product } from '../../services/productsDataType';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  products = signal<Product | undefined>(undefined);

  private route = inject(ActivatedRoute);
  private product = inject(Products);

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product.getProducts().subscribe((data)=>{
      data.products.filter((item)=>{
        if (item.id.toString() === productId) {
          this.products.set(item)
        }
      })
    })
    
  }

}
