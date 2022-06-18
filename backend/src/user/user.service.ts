import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getMyProfile(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
        name: true,
        createdAt: true,
        reviews: true,
        orders: true,
      },
    });

    const reviewsCount = user.reviews.length;
    const ordersCount = user.orders.length;
    return { user, reviewsCount, ordersCount };
  }
}
