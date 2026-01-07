import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'haejoong123' })
  @IsString()
  @IsNotEmpty()
<<<<<<< HEAD
  // @Min(1) => 여기서 정수 관련 길이 처리를 해서     "userId must not be greater than 20", "userId must not be less than 1" 뜸
  // @Max(20)
  @MinLength(1)
  @MaxLength(20)
=======
  @Length(1, 20)
>>>>>>> 9d3e0a08da43f02eacc760df0bceb45a778676b1
  userId: string;

  @ApiProperty({ example: 'password!' })
  @IsString()
  @IsNotEmpty()
  @Length(6, 100)
  password: string;

  @ApiProperty({ example: '해중' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 10)
  userName: string;
}
