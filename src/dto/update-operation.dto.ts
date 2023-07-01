import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateOperationDto {
  @IsString()
  @IsOptional()
  date?: Date;
  @IsNumber()
  @IsOptional()
  amount?: number;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  category?: string;
}
