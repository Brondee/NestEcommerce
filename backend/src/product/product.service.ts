import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConnectCategoryDto, CreateProductDto, EditProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getAllProducts() {
    const products = await this.prisma.product.findMany({
      select: {
        id: true,
        previewImage: true,
        available: true,
        title: true,
        pricePerDay: true,
        pricePerWeek: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
    return { products };
  }

  async getProductsByPage(page: number) {
    const numToTake = 1;
    const numToSkip = (page - 1) * numToTake;
    const products = await this.prisma.product.findMany({
      skip: numToSkip,
      take: numToTake,
      select: {
        id: true,
        previewImage: true,
        available: true,
        title: true,
        pricePerDay: true,
        pricePerWeek: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
    const productsCount = await this.prisma.product.count();
    const numPages = Math.ceil(productsCount / numToTake);
    return { products, numPages, page };
  }

  async getProductById(productId: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        images: {
          select: {
            id: true,
            url: true,
          },
        },
        categories: {
          select: {
            category: true,
          },
        },
        reviews: {
          select: {
            id: true,
            text: true,
            createdAt: true,
            user: {
              select: {
                name: true,
              },
            },
          },
          orderBy: {
            id: 'desc',
          },
        },
      },
    });
    return { product };
  }

  async searchProducts(query: string) {
    const products = await this.prisma.product.findMany({
      where: {
        title: {
          contains: query,
          mode: 'insensitive',
        },
      },
      orderBy: {
        available: 'desc',
      },
    });
    return { products };
  }

  async createProduct(dto: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: { ...dto },
    });
    return { product };
  }

  async editProduct(productId: number, dto: EditProductDto) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!product) throw new NotFoundException('cant find product');

    await this.prisma.product.update({
      where: {
        id: productId,
      },
      data: { ...dto },
    });
    return { product };
  }

  async connectCategory(dto: ConnectCategoryDto) {
    await this.prisma.product.update({
      where: {
        id: dto.productId,
      },
      data: {
        categories: {
          create: [
            {
              category: {
                connect: {
                  id: dto.categoryId,
                },
              },
            },
          ],
        },
      },
    });
  }

  async deleteProduct(productId: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!product) throw new NotFoundException('cant find product');

    await this.prisma.product.delete({
      where: {
        id: productId,
      },
    });
    return { success: 'item deleted' };
  }
}
