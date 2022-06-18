import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CreateImageDto } from './dto';
import { ProductImageService } from './product_image.service';

@UseGuards(JwtGuard)
@Controller('productimage')
export class ProductImageController {
  constructor(private productImageService: ProductImageService) {}

  @Post('add')
  addProductImage(@Body() dto: CreateImageDto) {
    return this.productImageService.addProductImage(dto);
  }
}
