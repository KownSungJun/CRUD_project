import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { FindPostCommentsQueryDto } from './dto/find-post-comments.dto';
import { FindUserCommentsQueryDto } from './dto/find-user-comments.dto';
import { FindParentcommentCommentsQueryDto } from './dto/find-parent-comment-comments.dto';
import { createCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class PostCommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post()
  create(@Body() dto: createCommentDto, @Req() req) {
    return this.commentsService.create(dto, req.user.userId);
  }

  @Get()
  findByPost(@Query() query: FindPostCommentsQueryDto) {
    return this.commentsService.findByPost(query);
  }

  @Get()
  findByUser(@Query() query: FindUserCommentsQueryDto) {
    return this.commentsService.findByUser(query);
  }

  @Get()
  findByparentCommentId(@Query() query: FindParentcommentCommentsQueryDto) {
    return this.commentsService.findByParentCommentId(query);
  }
}
