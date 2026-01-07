import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

export class PostResponseDto {
  @ApiProperty({ example: '65a1234abc...' })
  @Expose()
  @Transform(({ obj }) => obj._id?.toString())
  readonly id: string;

  @ApiProperty({ example: '글 제목이에요!!!' })
  @Expose()
  readonly title: string;

  @ApiProperty({ example: '반가워요 글 내용이에요.' })
  @Expose()
  content: string;

  @ApiProperty({ example: 'haejoong123' })
  @Expose()
  readonly authorId: string;

  @ApiProperty({ type: String, format: 'date-time' })
  @Expose()
  readonly createdAt: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  @Expose()
  readonly updatedAt: Date;
}
