import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { PostResponseDto } from '../dtos/post-response.dto';

export function ApiDeletePost() {
  return applyDecorators(
    ApiOperation({ summary: '게시글 삭제' }),
    ApiParam({ name: 'postId', example: '65a1234abc...' }),
    ApiOkResponse({
      description: '게시글 삭제 성공',
      type: PostResponseDto,
    }),
    ApiNotFoundResponse({ description: '존재하지 않는 게시글' }),
    ApiBearerAuth('access-token'),
  );
}
