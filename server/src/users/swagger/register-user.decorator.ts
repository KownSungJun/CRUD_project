import { applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiConflictResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { UserResponseDto } from '../dto/user-response.dto';
import { RegisterDto } from '../dto/register.dto';

export function ApiRegisterUser() {
  return applyDecorators(
    ApiOperation({ summary: '회원가입' }),
    ApiBody({ type: RegisterDto }),
    ApiOkResponse({ description: '회원가입 성공', type: UserResponseDto }),
    ApiConflictResponse({ description: '중복되는 유저가 존재' }),
  );
}
