import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { PostResponseDto } from '../dtos/post-response.dto';
import { CreatePostDto } from '../dtos/create-post.dto';

export function ApiCreatePost() {
  return applyDecorators(
    ApiOperation({ summary: '게시글 생성' }),
    ApiBody({ type: CreatePostDto }),
    ApiCreatedResponse({ description: '게시글 ', type: PostResponseDto }),
    ApiBearerAuth('access-token'),
  );
}
