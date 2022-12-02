import { Injectable } from '@angular/core';
import { Product } from '@prisma/client';
import { ApiService } from '@web-project-starter/api-codegen';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(public apiService: ApiService) { }

  public getProducts(): Observable<Product[]> {
    return this.apiService.productsControllerGetProducts();
  }
}
