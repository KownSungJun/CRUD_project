import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserResponseDto {
  @ApiProperty({ example: 'user_123' })
  @Expose()
  readonly userId: string;

  @ApiProperty({ example: '홍길동' })
  @Expose()
  readonly userName: string;

  @ApiProperty({ type: String, format: 'date-time' })
  @Expose()
  readonly createdAt: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  @Expose()
  readonly updatedAt: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  @Expose()
  readonly deletedAt: Date;
}
