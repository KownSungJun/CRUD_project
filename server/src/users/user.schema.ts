import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
	@Prop()
	userId: string;

	@Prop()
	password: string;

	@Prop()
	userName: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);