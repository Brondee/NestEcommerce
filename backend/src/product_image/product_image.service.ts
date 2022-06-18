import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateImageDto } from './dto';

@Injectable()
export class ProductImageService {
  constructor(private prsima: PrismaService) {}

  async addProductImage(dto: CreateImageDto) {
    const image = await this.prsima.productImage.create({
      data: { ...dto },
    });

    return { image };
  }
}
