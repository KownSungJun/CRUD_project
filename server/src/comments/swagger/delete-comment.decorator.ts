import { applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

export function ApiDeleteComment() {
  return applyDecorators(
    ApiOperation({ summary: '댓글 삭제' }),
    ApiOkResponse({ description: '삭제 성공' }),
    ApiBearerAuth('access-token'),
  );
}
