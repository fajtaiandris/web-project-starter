import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API_URL = 'http://localhost:3333/api';

  constructor(public http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }
}
