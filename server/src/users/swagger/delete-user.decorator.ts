import { applyDecorators } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { UserResponseDto } from '../dto/user-response.dto';

export function ApiDeleteUser() {
  return applyDecorators(
    ApiOperation({ summary: '유저 삭제' }),
    ApiParam({ name: 'userId', example: 'haejoong123' }),
    ApiOkResponse({ description: '삭제 성공', type: UserResponseDto }),
    ApiNotFoundResponse({ description: '존재하지 않는 유저' }),
  );
}
