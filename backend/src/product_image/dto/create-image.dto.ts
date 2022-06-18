import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsNumber()
  productId: number;
}
