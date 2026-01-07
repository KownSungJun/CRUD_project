import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CommentResponseDto } from '../dto/comment-response.dto';

export function ApiFindComment() {
  return applyDecorators(
    ApiOperation({ summary: '댓글 조회' }),
    ApiOkResponse({ description: '조회 성공', type: CommentResponseDto }),
  );
}
