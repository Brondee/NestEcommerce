import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  orderId: number;

  @IsNotEmpty()
  @IsString()
  deliveryMethod: string;

  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  @IsNotEmpty()
  @IsBoolean()
  paid: boolean;
}
