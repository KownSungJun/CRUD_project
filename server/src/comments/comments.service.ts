import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FindParentcommentCommentsQueryDto } from 'src/comments/dto/find-parent-comment-comments.dto';
import { FindPostCommentsQueryDto } from 'src/comments/dto/find-post-comments.dto';
import { FindUserCommentsQueryDto } from 'src/comments/dto/find-user-comments.dto';
import { createCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<Comment>,
  ) {}

  async create(dto: createCommentDto, userId: string) {
    const { content, postId, parentCommentId } = dto;

    return this.commentModel.create({
      content,
      postId,
      parentCommentId,
      userId,
    });
  }

  async findByPost(query: FindPostCommentsQueryDto) {
    const { postId, page, limit } = query;
    const skip = (page - 1) * limit;

    const [comments, total] = await Promise.all([
      this.commentModel
        .find({ postId })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      this.commentModel.countDocuments({ postId }),
    ]);

    return {
      comments,
      total,
      page,
      limit,
    };
  }

  async findByUser(query: FindUserCommentsQueryDto) {
    const { userId, page, limit } = query;
    const skip = (page - 1) * limit;

    const [comments, total] = await Promise.all([
      this.commentModel
        .find({ userId })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      this.commentModel.countDocuments({ userId }),
    ]);

    return {
      comments,
      total,
      page,
      limit,
    };
  }

  async findByParentCommentId(query: FindParentcommentCommentsQueryDto) {
    const { parentCommentId, page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;

    const [comments, total] = await Promise.all([
      this.commentModel
        .find({ parentCommentId })
        .sort({ createdAt: 1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      this.commentModel.countDocuments({ parentCommentId }),
    ]);

    return {
      comments,
      total,
      page,
      limit,
    };
  }
}
