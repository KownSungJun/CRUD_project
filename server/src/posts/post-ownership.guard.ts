import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Injectable()
export class PostOwnershipGuard implements CanActivate {
  constructor(private postsService: PostsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const userId = req.user.userId;
    const postId = req.params.postId;

    const post = await this.postsService.findOne(postId);

    if (post.authorId.toString() !== userId) {
      throw new ForbiddenException('No permission to delete this post');
    }

    return true;
  }
}
