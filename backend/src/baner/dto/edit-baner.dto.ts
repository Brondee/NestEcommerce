import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditBanerDto {
  @IsNotEmpty()
  @IsNumber()
  banerId: number;

  @IsOptional()
  @IsString()
  url: string;

  @IsOptional()
  @IsBoolean()
  isShown: boolean;
}
