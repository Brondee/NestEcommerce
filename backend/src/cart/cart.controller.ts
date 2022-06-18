import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Cart } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CartService } from './cart.service';
import { CreateCartItemDto } from './dto';

@UseGuards(JwtGuard)
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Get()
  getUserCart(@GetUser('cart') cart: Cart) {
    return this.cartService.getUserCart(cart[0]);
  }

  @Post('add')
  addCartItem(@GetUser('cart') cart: Cart, @Body() dto: CreateCartItemDto) {
    return this.cartService.addCartItem(cart[0], dto);
  }

  @Delete('delete/:id')
  deleteCartItem(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.deleteCartItem(id);
  }
}
