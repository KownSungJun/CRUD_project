import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './post.schema';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
  ) {}

  async findOne(postId: string) {
    return await this.findPostOrThrow(postId, { lean: true });
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
      this.postModel.countDocuments(),
    ]);

    return {
      items,
      total,
      page,
      limit,
    };
  }

  async create(dto: CreatePostDto, authorId: string) {
    const post = await this.postModel.create({
      ...dto,
      authorId,
    });

    return post.toObject();
  }

  async update(postId: string, dto: UpdatePostDto) {
    const post = await this.findPostOrThrow(postId);

    Object.assign(post, dto);

    return post.save();
  }

  async delete(postId: string) {
    const post = await this.findPostOrThrow(postId);

    post.deletedAt = new Date();
    return post.save();
  }

  // ========================= private methods =========================

  private async findPostOrThrow(postId: string, options?: { lean?: boolean }) {
    const query = this.postModel.findOne({
      _id: postId,
      deletedAt: null,
    });

    if (options?.lean) {
      query.lean();
    }

    const post = await query.exec();
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post;
  }
}
