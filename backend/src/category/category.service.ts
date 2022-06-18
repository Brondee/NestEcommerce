import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getAllCategories() {
    const categories = await this.prisma.category.findMany();
    return { categories };
  }

  async getProductsByCategory(categoryId: number) {
    const products = await this.prisma.product.findMany({
      where: {
        categories: {
          some: {
            category: {
              id: categoryId,
            },
          },
        },
      },
      select: {
        id: true,
        available: true,
        previewImage: true,
        title: true,
        pricePerDay: true,
        pricePerWeek: true,
      },
      orderBy: {
        available: 'desc',
      },
    });
    return { products };
  }

  async addCategory(dto: CreateCategoryDto) {
    const category = await this.prisma.category.create({
      data: { ...dto },
    });
    return { category };
  }
}
