import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { CommentResponseDto } from '../dto/comment-response.dto';
import { CreateCommentDto } from '../dto/create-comment.dto';

export function ApiCreateComment() {
  return applyDecorators(
    ApiOperation({ summary: '댓글 생성' }),
    ApiBody({ type: CreateCommentDto }),
    ApiCreatedResponse({ description: '댓글 생성', type: CommentResponseDto }),
    ApiBearerAuth('access-token'),
  );
}
