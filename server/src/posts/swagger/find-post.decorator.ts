import { applyDecorators } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { PostResponseDto } from '../dtos/post-response.dto';

export function ApiFindPost() {
  return applyDecorators(
    ApiOperation({ summary: '게시글 조회' }),
    ApiParam({ name: 'postId', example: '65a1234abc...' }),
    ApiCreatedResponse({
      description: '게시글 조회 성공',
      type: PostResponseDto,
    }),
    ApiNotFoundResponse({ description: '존재하지 않는 게시글' }),
  );
}
