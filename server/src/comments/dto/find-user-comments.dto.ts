import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class FindUserCommentsQueryDto {
  @ApiProperty({ example: '' })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({ required: false, default: 1, minimum: 1 })
  @IsOptional()
  @Transform(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @ApiProperty({ required: false, default: 10, minimum: 1 })
  @IsOptional()
  @Transform(() => Number)
  @IsInt()
  @Min(1)
  limit: number = 10;
}
