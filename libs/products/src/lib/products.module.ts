import { Module } from '@nestjs/common';
import { PrismaModule } from '@web-project-starter/prisma';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [PrismaModule],
  exports: [ProductsService],
})
export class ProductsModule {}
