import { IsNotEmpty, IsNumber } from 'class-validator';

export class ConnectCategoryDto {
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
