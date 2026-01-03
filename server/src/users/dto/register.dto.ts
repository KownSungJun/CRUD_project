import { IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
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
