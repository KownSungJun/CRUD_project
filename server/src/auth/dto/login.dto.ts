import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'haejoong123' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ example: 'password!' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
