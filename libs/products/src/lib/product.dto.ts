import { ApiProperty } from "@nestjs/swagger";
import { Product } from "@prisma/client";

export default class ProductDto implements Product {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  sku: string;
}