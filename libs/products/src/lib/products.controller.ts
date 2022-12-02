import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import ProductDto from './product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }
  
  @Get()
  @ApiOperation({ summary: 'Gets the list of all products' })
  @ApiResponse({ type: ProductDto, isArray: true })
  public async getProducts(): Promise<ProductDto[]>{
    return this.productsService.getProducts();
  }
}
