import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class EditProductDto {
  @IsOptional()
  @IsBoolean()
  available: boolean;

  @IsOptional()
  @IsString()
  previewImage: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  players: string;

  @IsOptional()
  @IsString()
  time: string;

  @IsOptional()
  @IsString()
  age: string;

  @IsOptional()
  @IsNumber()
  pricePerDay: number;

  @IsOptional()
  @IsNumber()
  pricePerWeek: number;

  @IsOptional()
  @IsString()
  description: string;
}
