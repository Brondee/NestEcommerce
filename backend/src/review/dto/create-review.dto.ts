import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNumber()
  @IsNotEmpty()
  productId: number;
}
