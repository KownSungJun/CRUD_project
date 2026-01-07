import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'haejoong123' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  userId: string;

  @ApiProperty({ example: 'password!' })
  @IsString()
  @IsNotEmpty()
  @Length(6, 100)
  password: string;

  @ApiProperty({ example: '해중' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 10)
  userName: string;
}
