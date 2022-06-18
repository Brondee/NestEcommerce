import { BadRequestException, Injectable } from '@nestjs/common';
import { Cart } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartItemDto } from './dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async getUserCart(cart: Cart) {
    const userCart = await this.prisma.cart.findUnique({
      where: {
        id: cart.id,
      },
      select: {
        cartItems: {
          select: {
            id: true,
            duration: true,
            product: {
              select: {
                id: true,
                available: true,
                previewImage: true,
                title: true,
                pricePerDay: true,
                pricePerWeek: true,
              },
            },
          },
        },
      },
    });
    const totalItemsCount = userCart.cartItems.length;
    const totalPrice = userCart.cartItems.reduce((total, cartItem) => {
      if (cartItem.duration === 'day') {
        total += cartItem.product.pricePerDay;
      } else {
        total += cartItem.product.pricePerWeek;
      }

      return total;
    }, 0);

    return { userCart, totalItemsCount, totalPrice };
  }

  async addCartItem(cart: Cart, dto: CreateCartItemDto) {
    try {
      const cartItem = await this.prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: dto.productId,
          duration: dto.duration,
        },
      });
      return { cartItem };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2003') {
          throw new BadRequestException('product id is incorrect');
        }
      }
      throw error;
    }
  }

  async deleteCartItem(id: number) {
    try {
      await this.prisma.cartItem.delete({
        where: {
          id,
        },
      });
      return { success: 'item deleted' };
    } catch (error) {
      throw error;
    }
  }
}
