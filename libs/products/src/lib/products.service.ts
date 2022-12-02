import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from '@web-project-starter/prisma';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) { }
  
  public getProducts(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }
}
