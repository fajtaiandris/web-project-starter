import { Component, OnInit } from '@angular/core';
import { Product } from '@prisma/client';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'web-project-starter-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public $products: Observable<Product[]>
  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.$products = this.productsService.getProducts();
  }
}
