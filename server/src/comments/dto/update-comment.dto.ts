import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCommentDto {
  @ApiProperty({ example: '수정된 댓글 내용이에요.' })
  @IsString()
  @IsNotEmpty()
  readonly content: string;
}
