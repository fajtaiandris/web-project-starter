/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ProductDto } from '../models/product-dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation appControllerGetData
   */
  static readonly AppControllerGetDataPath = '/api';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appControllerGetData()` instead.
   *
   * This method doesn't expect any request body.
   */
  appControllerGetData$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppControllerGetDataPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appControllerGetData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  appControllerGetData(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.appControllerGetData$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation productsControllerGetProducts
   */
  static readonly ProductsControllerGetProductsPath = '/api/products';

  /**
   * Gets the list of all products.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsControllerGetProducts()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsControllerGetProducts$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ProductDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ProductsControllerGetProductsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductDto>>;
      })
    );
  }

  /**
   * Gets the list of all products.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `productsControllerGetProducts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsControllerGetProducts(params?: {
    context?: HttpContext
  }
): Observable<Array<ProductDto>> {

    return this.productsControllerGetProducts$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProductDto>>) => r.body as Array<ProductDto>)
    );
  }

}
