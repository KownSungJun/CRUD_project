import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { CommentResponseDto } from '../dto/comment-response.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';

export function ApiUpdateComment() {
  return applyDecorators(
    ApiOperation({ summary: '댓글 수정' }),
    ApiBody({ type: UpdateCommentDto }),
    ApiOkResponse({ description: '댓글 수정 성공', type: CommentResponseDto }),
    ApiBearerAuth('access-token'),
  );
}
