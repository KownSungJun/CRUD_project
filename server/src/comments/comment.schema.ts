import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Comment {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true, index: true })
  userId: string;

  @Prop({ type: Types.ObjectId, required: true, index: true })
  postId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, default: null, index: true })
  parentCommentId: Types.ObjectId | null;
}

export type CommentDocument = HydratedDocument<Comment>;
export const CommentSchema = SchemaFactory.createForClass(Comment);
