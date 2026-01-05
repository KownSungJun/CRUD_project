import { PartialType, OmitType } from '@nestjs/swagger';
import { RegisterDto } from './register.dto';

export class UpdateUserDto extends PartialType(
  OmitType(RegisterDto, ['password'] as const),
) {}
