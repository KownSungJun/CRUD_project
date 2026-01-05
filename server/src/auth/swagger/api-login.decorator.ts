import { applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LoginResponseDto } from '../dto/login-response.dto';
import { LoginDto } from '../dto/login.dto';

export function ApiLogin() {
  return applyDecorators(
    ApiOperation({ summary: '로그인' }),
    ApiBody({ type: LoginDto }),
    ApiOkResponse({
      type: LoginResponseDto,
      description: '로그인 성공 (쿠키에 자동 토큰 추가)',
    }),
    ApiUnauthorizedResponse({ description: '로그인 실패' }),
  );
}
