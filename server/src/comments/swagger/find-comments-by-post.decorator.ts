import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { CommentResponseDto } from '../dto/comment-response.dto';

export function ApiFindCommentsByPost() {
  return applyDecorators(
    ApiOperation({ summary: '게시글의 댓글 조회' }),
    ApiParam({ name: 'postId', example: '65a1234abc...' }),
    ApiOkResponse({ description: '조회 성공', type: CommentResponseDto }),
  );
}
