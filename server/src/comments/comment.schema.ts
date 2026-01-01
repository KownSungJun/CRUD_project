import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Comment {
  @Prop({ required: true })
  content: string;
  
  //userId는 _id말고 사용자가 지정한 id를 key로 사용
  @Prop({ required: true, index: true })
  userId: string;

  @Prop({ type: Types.ObjectId, required: true, index: true })
  postId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, default: null, index: true })
  parentCommentId: Types.ObjectId | null;
}

export type CommentDocument = Comment & Document;
export const CommentSchema = SchemaFactory.createForClass(Comment);
