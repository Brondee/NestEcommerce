import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto } from './dto';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async getMyReviews(userId: number) {
    const reviews = await this.prisma.review.findMany({
      where: {
        userId,
      },
      orderBy: {
        id: 'desc',
      },
    });
    return { reviews };
  }

  async createReview(dto: CreateReviewDto, userId: number) {
    const review = await this.prisma.review.create({
      data: {
        text: dto.text,
        userId,
        productId: dto.productId,
      },
    });
    return review;
  }
}
