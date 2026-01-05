import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from './dto/register.dto';
import bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { plainToInstance } from 'class-transformer';
import { UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async findByUserId(userId: string) {
    const user = await this.userModel.findOne({ userId }).exec();
    return user;
  }

  async findByUserIdOrThrow(userId: string) {
    const user = await this.findByUserId(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async getUser(userId: string) {
    const user = await this.findByUserIdOrThrow(userId);

    return plainToInstance(UserResponseDto, user.toObject(), {
      excludeExtraneousValues: true,
    });
  }

  async update(userId: string, dto: UpdateUserDto) {
    const user = await this.findByUserIdOrThrow(userId);
    Object.assign(user, dto);
    user.save();

    return plainToInstance(UserResponseDto, user.toObject(), {
      excludeExtraneousValues: true,
    });
  }

  async delete(userId: string) {
    const user = await this.findByUserIdOrThrow(userId);
    user.deletedAt = new Date();
    user.save();

    return plainToInstance(UserResponseDto, user.toObject(), {
      excludeExtraneousValues: true,
    });
  }

  async register(dto: RegisterDto) {
    const exists = await this.userModel.exists({ userId: dto.userId });
    if (exists) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = new this.userModel({
      userId: dto.userId,
      userName: dto.userName,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    return plainToInstance(UserResponseDto, savedUser.toObject(), {
      excludeExtraneousValues: true,
    });
  }
}
