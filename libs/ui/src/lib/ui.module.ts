import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiCodegenModule } from '@web-project-starter/api-codegen';

@NgModule({
  imports: [CommonModule, HttpClientModule, ApiCodegenModule],
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
})
export class UiModule {}
