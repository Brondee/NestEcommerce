import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

class ItemData {
  productId: number;
  duration: string;
}

export class CreateOrderDto {
  @IsNotEmpty()
  @IsArray()
  itemsData: ItemData[];

  @IsNotEmpty()
  @IsNumber()
  totalPrice: number;
}
