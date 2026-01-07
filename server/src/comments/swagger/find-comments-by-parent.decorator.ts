import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { CommentResponseDto } from '../dto/comment-response.dto';

export function ApiFindCommentsByParent() {
  return applyDecorators(
    ApiOperation({ summary: '부모 댓글의 자식 댓글 조회' }),
    ApiParam({ name: 'parentCommentId', example: '65a1234abc...' }),
    ApiOkResponse({ description: '조회 성공', type: CommentResponseDto }),
  );
}
