import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class FindUserCommentsQueryDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsOptional()
  @Transform(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Transform(() => Number)
  @IsInt()
  @Min(1)
  limit: number = 10;
}
