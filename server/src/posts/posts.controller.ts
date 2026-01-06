import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostsService } from './posts.service';
import { FindPostsQueryDto } from './dtos/find-posts.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PostOwnershipGuard } from './post-ownership.guard';
import { ApiFindPost } from './swagger/find-post.decorator';
import { ApiFindPosts } from './swagger/find-posts.decorator';
import { ApiCreatePost } from './swagger/create-post.decorator';
import { ApiUpdatePost } from './swagger/update-post.decorator';
import { ApiDeletePost } from './swagger/delete-post.decorator';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiFindPost()
  @Get(':postId')
  findOne(@Param('postId') id: string) {
    return this.postsService.findOne(id);
  }

  @ApiFindPosts()
  @Get()
  findAll(@Query() query: FindPostsQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    return this.postsService.findAll(page, limit);
  }

  @ApiCreatePost()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreatePostDto, @Req() req) {
    return this.postsService.create(dto, req.user.userId);
  }

  @ApiUpdatePost()
  @UseGuards(JwtAuthGuard, PostOwnershipGuard)
  @Patch(':postId')
  update(@Param('postId') postId: string, @Body() dto: UpdatePostDto) {
    return this.postsService.update(postId, dto);
  }

  @ApiDeletePost()
  @UseGuards(JwtAuthGuard, PostOwnershipGuard)
  @Delete(':postId')
  delete(@Param('postId') postId: string) {
    return this.postsService.delete(postId);
  }
}
