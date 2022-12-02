/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ApiService } from './services/api.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  declarations: [],
  providers: [
    ApiService,
    ApiConfiguration
  ],
})
export class ApiCodegenModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiCodegenModule> {
    return {
      ngModule: ApiCodegenModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiCodegenModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiCodegenModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
