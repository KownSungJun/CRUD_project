import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types, isValidObjectId } from 'mongoose';
import { Post, PostDocument } from './post.schema';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { PostResponseDto } from './dtos/post-response.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<PostDocument>,
  ) {}

  async findOne(postId: string) {
    const post = await this.findPostOrThrow(postId, { lean: true });
    return this.toDto(post);
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const filter = { deletedAt: null };

    const [items, total] = await Promise.all([
      this.postModel
        .find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      this.postModel.countDocuments(filter),
    ]);

    return {
      items: items.map(this.toDto),
      total,
      page,
      limit,
    };
  }

  async create(dto: CreatePostDto, authorId: string) {
    const post = await this.postModel.create({ ...dto, authorId });
    return this.toDto(post.toObject());
  }

  async update(postId: string, dto: UpdatePostDto) {
    const post = await this.findPostOrThrow(postId);
    Object.assign(post, dto);
    const updated = await post.save();
    return this.toDto(updated.toObject());
  }

  async delete(postId: string) {
    const post = await this.findPostOrThrow(postId);
    post.deletedAt = new Date();
    const deleted = await post.save();
    return this.toDto(deleted.toObject());
  }

  // ========================= private methods =========================

  private async findPostOrThrow(postId: string, options?: { lean?: boolean }) {
    if (!isValidObjectId(postId)) {
      throw new NotFoundException('Invalid postId');
    }

    const query = this.postModel.findOne({
      _id: new Types.ObjectId(postId),
      deletedAt: null,
    });

    if (options?.lean) query.lean();

    const post = await query.exec();

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post;
  }

  private toDto(post: any): PostResponseDto {
    return plainToInstance(PostResponseDto, post, {
      excludeExtraneousValues: true,
    });
  }
}
