import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBanerDto {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsOptional()
  @IsBoolean()
  isSwown: boolean;
}
