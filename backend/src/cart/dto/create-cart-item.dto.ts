import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCartItemDto {
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsString()
  duration: string;
}
