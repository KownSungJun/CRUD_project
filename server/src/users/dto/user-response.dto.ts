import { ApiProperty } from "@nestjs/swagger";

export class UserResponseDto {
  @ApiProperty({ example: 'user_123' })
  readonly userId: string;

  @ApiProperty({ example: '홍길동' })
  readonly userName: string;

  @ApiProperty({ type: String, format: 'date-time' })
  readonly createdAt: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  readonly updatedAt: Date;
}
