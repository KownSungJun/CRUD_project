import { Transform } from 'class-transformer';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Types.ObjectId(value))
  @IsMongoId()
  postId: Types.ObjectId;

  @IsOptional()
  @Transform(({ value }) => (value ? new Types.ObjectId(value) : null))
  @IsMongoId()
  parentCommentId?: Types.ObjectId | null;
}
