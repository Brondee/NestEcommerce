import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CreateReviewDto } from './dto';
import { ReviewService } from './review.service';

@UseGuards(JwtGuard)
@Controller('reviews')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get('my')
  getMyReviews(@GetUser('id') userId: number) {
    return this.reviewService.getMyReviews(userId);
  }

  @Post('add')
  addNewReview(@Body() dto: CreateReviewDto, @GetUser('id') userId: number) {
    return this.reviewService.createReview(dto, userId);
  }
}
