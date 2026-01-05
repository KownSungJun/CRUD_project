import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, index: true })
  userId: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  userName: string;

  @Prop({ type: Date, default: null })
  deletedAt: Date | null;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
