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

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreatePostDto, @Req() req) {
    return this.postsService.create(dto, req.user.userId);
  }

  @UseGuards(JwtAuthGuard, PostOwnershipGuard)
  @Patch(':id')
  update(@Param('id') postId: string, @Body() dto: UpdatePostDto) {
    return this.postsService.update(postId, dto);
  }

  @UseGuards(JwtAuthGuard, PostOwnershipGuard)
  @Delete(':id')
  delete(@Param('id') postId: string) {
    return this.postsService.delete(postId);
  }
}
