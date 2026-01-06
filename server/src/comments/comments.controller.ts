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
import { CommentsService } from './comments.service';
import { FindPostCommentsQueryDto } from './dto/find-post-comments.dto';
import { FindUserCommentsQueryDto } from './dto/find-user-comments.dto';
import { FindParentcommentCommentsQueryDto } from './dto/find-parent-comment-comments.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommentOwnershipGuard } from './comment-ownership.guard';
import { ApiCreateComment } from './swagger/create-comment.decorator';
import { ApiFindComment } from './swagger/find-comment.decorator';
import { ApiFindCommentsByPost } from './swagger/find-comments-by-post.decorator';
import { ApiFindCommentsByUser } from './swagger/find-comments-by-user.decorator';
import { ApiFindCommentsByParent } from './swagger/find-comments-by-parent.decorator';
import { ApiUpdateComment } from './swagger/update-comment.decorator';
import { ApiDeleteComment } from './swagger/delete-comment.decorator';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @ApiCreateComment()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateCommentDto, @Req() req) {
    return this.commentsService.create(dto, req.user.userId);
  }

  @ApiFindComment()
  @Get(':commentId')
  findOne(@Param('commentId') commentId: string) {
    return this.commentsService.findOne(commentId);
  }

  @ApiFindCommentsByPost()
  @Get('postId/:postId')
  findByPost(
    @Param('postId') postId: string,
    @Query() query: FindPostCommentsQueryDto,
  ) {
    return this.commentsService.findByPost(postId, query);
  }

  @ApiFindCommentsByUser()
  @Get('userId/:userId')
  @UseGuards(JwtAuthGuard, CommentOwnershipGuard)
  findByUser(
    @Param('userId') userId: string,
    @Query() query: FindUserCommentsQueryDto,
  ) {
    return this.commentsService.findByUser(userId, query);
  }

  @ApiFindCommentsByParent()
  @Get('parentCommentId/:parentCommentId')
  findByparentCommentId(
    @Param('parentCommentId') parentCommentId: string,
    @Query() query: FindParentcommentCommentsQueryDto,
  ) {
    return this.commentsService.findByParentCommentId(parentCommentId, query);
  }

  @ApiUpdateComment()
  @UseGuards(JwtAuthGuard, CommentOwnershipGuard)
  @Patch(':commentId')
  update(@Param('commentId') commentId: string, @Body() dto: UpdateCommentDto) {
    return this.commentsService.update(commentId, dto);
  }

  @ApiDeleteComment()
  @UseGuards(JwtAuthGuard, CommentOwnershipGuard)
  @Delete(':commentId')
  delete(@Param('commentId') commentId: string) {
    return this.commentsService.delete(commentId);
  }
}
