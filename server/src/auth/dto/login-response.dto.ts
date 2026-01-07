import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ example: 'asdfasdfasd' })
  accessToken: string;
}
