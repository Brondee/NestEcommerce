import { Module } from '@nestjs/common';
import { ProductImageController } from './product_image.controller';
import { ProductImageService } from './product_image.service';

@Module({
  controllers: [ProductImageController],
  providers: [ProductImageService]
})
export class ProductImageModule {}
