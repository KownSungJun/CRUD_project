import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FindPostCommentsQueryDto } from 'src/comments/dto/find-post-comments.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment, CommentDocument } from './comment.schema';
import { FindUserCommentsQueryDto } from './dto/find-user-comments.dto';
import { FindParentcommentCommentsQueryDto } from './dto/find-parent-comment-comments.dto';
import { plainToInstance } from 'class-transformer';
import { CommentResponseDto } from './dto/comment-response.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentDocument>,
  ) {}

  async findOne(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid commentId');
    }

    const comment = await this.commentModel.findById(id).lean();
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    return this.toDto(comment);
  }

  async create(dto: CreateCommentDto, userId: string) {
    const created = await this.commentModel.create({
      content: dto.content,
      postId: new Types.ObjectId(dto.postId),
      parentCommentId: dto.parentCommentId
        ? new Types.ObjectId(dto.parentCommentId)
        : null,
      userId,
    });

    return this.toDto(created.toObject());
  }

  async findByPost(postId: string, query: FindPostCommentsQueryDto) {
    const result = await this.findWithPagination(
      { postId: new Types.ObjectId(postId), parentCommentId: null },
      query,
      { createdAt: -1 },
    );

    return {
      ...result,
      comments: result.comments.map(this.toDto),
    };
  }

  async findByUser(userId: string, query: FindUserCommentsQueryDto) {
    const result = await this.findWithPagination({ userId }, query, {
      createdAt: -1,
    });

    return {
      ...result,
      comments: result.comments.map(this.toDto),
    };
  }

  async findByParentCommentId(
    parentCommentId: string,
    query: FindParentcommentCommentsQueryDto,
  ) {
    const result = await this.findWithPagination(
      { parentCommentId: new Types.ObjectId(parentCommentId) },
      query,
      { createdAt: 1 },
    );

    return {
      ...result,
      comments: result.comments.map(this.toDto),
    };
  }

  async update(commentId: string, dto: UpdateCommentDto) {
    const updated = await this.commentModel
      .findByIdAndUpdate(commentId, { content: dto.content }, { new: true })
      .lean();

    if (!updated) {
      throw new NotFoundException('Comment not found');
    }

    return this.toDto(updated);
  }

  async delete(commentId: string) {
    const deleted = await this.commentModel.findByIdAndDelete(commentId).lean();

    if (!deleted) {
      throw new NotFoundException('Comment not found');
    }

    return this.toDto(deleted);
  }
  // =========================== private functions ===========================

  private async findWithPagination(
    filter: Record<string, any>,
    query: { page?: number; limit?: number },
    sort: Record<string, 1 | -1> = { createdAt: -1 },
  ) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    const skip = (page - 1) * limit;

    const baseFilter = {
      deletedAt: null,
      ...filter,
    };

    const [comments, total] = await Promise.all([
      this.commentModel
        .find(baseFilter)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean(),
      this.commentModel.countDocuments(baseFilter),
    ]);

    return { comments, total, page, limit };
  }

  private toDto(post: any): CommentResponseDto {
    return plainToInstance(CommentResponseDto, post, {
      excludeExtraneousValues: true,
    });
  }
}
