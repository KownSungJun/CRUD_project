import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostsService } from './posts.service';
import { FindPostsQueryDto } from './dtos/find-posts.dto';
import { UpdatePostDto } from './dtos/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Get()
  findAll(@Query() query: FindPostsQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    return this.postsService.findAll(page, limit);
  }

  @Post()
  create(@Body() dto: CreatePostDto, @Req() req) {
    return this.postsService.create(dto, req.user.userId);
  }

  @Patch(':id')
  update(@Param('id') postId: string, @Body() dto: UpdatePostDto, @Req() req) {
    return this.postsService.update(postId, dto, req.user.userId);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') postId: string, @Req() req) {
    return this.postsService.delete(postId, req.user.userId);
  }
}
