import { IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  // @Min(1) => 여기서 정수 관련 길이 처리를 해서     "userId must not be greater than 20", "userId must not be less than 1" 뜸
  // @Max(20)
  @MinLength(1)
  @MaxLength(20)
  userId: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(100)
  password: string;
  
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(10)
  userName: string;
}
