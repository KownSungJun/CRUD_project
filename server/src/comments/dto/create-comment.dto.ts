import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: '재밌는 글이에요' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: '65a1234abc...' })
  @IsNotEmpty()
  @IsMongoId()
  postId: string;

  @IsOptional()
  @IsMongoId()
  parentCommentId?: string | null;
}
