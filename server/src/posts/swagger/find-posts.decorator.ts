import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { PostResponseDto } from '../dtos/post-response.dto';

export function ApiFindPosts() {
  return applyDecorators(
    ApiOperation({ summary: '게시글 여러개 조회' }),
    ApiOkResponse({ description: '조회 성공', type: PostResponseDto }),
  );
}
