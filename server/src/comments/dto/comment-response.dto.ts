import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

export class CommentResponseDto {
  @ApiProperty({ example: '65a1234abc...' })
  @Expose()
  @Transform(({ obj }) => obj._id?.toString())
  readonly id: string;

  @ApiProperty({ example: '댓글 내용이에요.' })
  @Expose()
  readonly content: string;

  @ApiProperty({ example: 'user123' })
  @Expose()
  readonly userId: string;

  @ApiProperty({ example: '65a1234abc...' })
  @Expose()
  readonly postId: string;

  @ApiProperty({ example: null })
  @Expose()
  readonly parentCommentId: string | null;

  @ApiProperty({ type: String, format: 'date-time' })
  @Expose()
  readonly createdAt: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  @Expose()
  readonly updatedAt: Date;
}
