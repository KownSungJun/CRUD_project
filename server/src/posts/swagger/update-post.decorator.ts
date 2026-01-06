import { applyDecorators } from '@nestjs/common';
import { UpdatePostDto } from '../dtos/update-post.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { PostResponseDto } from '../dtos/post-response.dto';

export function ApiUpdatePost() {
  return applyDecorators(
    ApiOperation({ summary: '게시글 수정' }),
    ApiBody({ type: UpdatePostDto }),
    ApiOkResponse({ description: '게시글 ', type: PostResponseDto }),
    ApiBearerAuth('access-token'),
  );
}
