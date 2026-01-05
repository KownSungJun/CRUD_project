import { applyDecorators } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { UserResponseDto } from '../dto/user-response.dto';

export function ApiFindUser() {
  return applyDecorators(
    ApiOperation({ summary: '유저 조회' }),
    ApiParam({ name: 'userId', example: 'haejoong123' }),
    ApiOkResponse({ description: '유저 조회 성공', type: UserResponseDto }),
    ApiNotFoundResponse({ description: '존재하지 않는 유저' }),
  );
}
