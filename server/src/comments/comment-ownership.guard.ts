import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CommentsService } from './comments.service';

@Injectable()
export class CommentOwnershipGuard implements CanActivate {
  constructor(private commentsService: CommentsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const userId = req.user.userId;
    const commentId = req.params.commentId;

    const comment = await this.commentsService.findOne(commentId);

    if (!comment) {
      throw new ForbiddenException('Comment not found');
    }

    if (comment.userId.toString() !== userId) {
      throw new ForbiddenException('No permission to modify this comment');
    }

    return true;
  }
}
