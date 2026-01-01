import { Transform } from 'class-transformer';
import { IsInt, IsMongoId, IsNotEmpty, IsOptional, Min } from 'class-validator';
import { Types } from 'mongoose';

export class FindParentcommentCommentsQueryDto {
	@IsNotEmpty()
	@Transform(({ value }) => new Types.ObjectId(value))
	@IsMongoId()
	parentCommentId: Types.ObjectId;

	@IsOptional()
	@Transform(() => Number)
	@IsInt()
	@Min(1)
	page: number = 1;

	@IsOptional()
	@Transform(() => Number)
	@IsInt()
	@Min(1)
	limit: number = 10;
}
