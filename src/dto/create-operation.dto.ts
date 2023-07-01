import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateOperationDto {
  @IsString()
  @IsNotEmpty()
  date: Date;
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  category: string;
}
