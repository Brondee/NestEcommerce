import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto, UpdateOrderDto } from './dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getMyOrders(userId: number) {
    const orders = await this.prisma.order.findMany({
      where: {
        userId,
      },
      include: {
        orderItems: {
          select: {
            duration: true,
            product: {
              select: {
                id: true,
                previewImage: true,
                title: true,
                pricePerDay: true,
                pricePerWeek: true,
              },
            },
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
    return { orders };
  }

  async addOrder(userId: number, dto: CreateOrderDto) {
    const order = await this.prisma.order.create({
      data: {
        totalPrice: dto.totalPrice,
        userId,
        orderItems: {
          create: dto.itemsData,
        },
      },
    });
    return { order };
  }

  async updateOrder(dto: UpdateOrderDto) {
    const order = await this.prisma.order.update({
      where: {
        id: dto.orderId,
      },
      data: {
        deliveryMethod: dto.deliveryMethod,
        paymentMethod: dto.paymentMethod,
        paid: dto.paid,
      },
    });

    return { order };
  }
}
