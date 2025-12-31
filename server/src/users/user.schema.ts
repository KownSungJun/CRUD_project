import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, index: true })
  userId: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  userName: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
