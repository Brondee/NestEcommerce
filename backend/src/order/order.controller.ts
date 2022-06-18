import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { OrderService } from './order.service';

@UseGuards(JwtGuard)
@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('my')
  getMyOrders(@GetUser('id') userId: number) {
    return this.orderService.getMyOrders(userId);
  }

  @Post('add')
  addOrder(@GetUser('id') userId: number, @Body() dto: CreateOrderDto) {
    return this.orderService.addOrder(userId, dto);
  }

  @Patch('update')
  updateOrder(@Body() dto: UpdateOrderDto) {
    return this.orderService.updateOrder(dto);
  }
}
