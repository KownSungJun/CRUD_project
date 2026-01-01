import { Module } from '@nestjs/common';
import { PostCommentsController } from './post-comments.controller';
import { CommentsService } from './comments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [PostCommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
