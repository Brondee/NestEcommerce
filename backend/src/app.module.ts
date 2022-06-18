import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ReviewModule } from './review/review.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ProductImageModule } from './product_image/product_image.module';
import { CategoryModule } from './category/category.module';
import { BanerModule } from './baner/baner.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
    PrismaModule,
    AuthModule,
    UserModule,
    ReviewModule,
    CartModule,
    OrderModule,
    ProductImageModule,
    CategoryModule,
    BanerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
