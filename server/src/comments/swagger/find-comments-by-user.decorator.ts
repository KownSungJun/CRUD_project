import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { CommentResponseDto } from '../dto/comment-response.dto';

export function ApiFindCommentsByUser() {
  return applyDecorators(
    ApiOperation({ summary: '유저의 댓글 조회' }),
    ApiParam({ name: 'userId', example: 'haejoong123' }),
    ApiOkResponse({ description: '조회 성공', type: CommentResponseDto }),
    ApiBearerAuth('access-token'),
  );
}
