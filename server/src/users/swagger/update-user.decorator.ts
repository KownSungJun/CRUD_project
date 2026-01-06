import { applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserResponseDto } from '../dto/user-response.dto';

export function ApiUpdateUser() {
  return applyDecorators(
    ApiOperation({ summary: '유저 정보 수정' }),
    ApiBody({ type: UpdateUserDto }),
    ApiOkResponse({ description: '수정 성공', type: UserResponseDto }),
    ApiNotFoundResponse({ description: '존재하지 않는 유저' }),
  );
}
