import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  previewImage: string;

  @IsNotEmpty()
  @IsString()
  players: string;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsString()
  age: string;

  @IsNotEmpty()
  @IsNumber()
  pricePerDay: number;

  @IsNotEmpty()
  @IsNumber()
  pricePerWeek: number;

  @IsNotEmpty()
  @IsString()
  description: string;
}
