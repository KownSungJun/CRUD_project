import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: '게시글 제목이에요' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  title: string;

  @ApiProperty({ example: '게시글 내용입니다. 주저리 주저리.' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 10000)
  content: string;
}
