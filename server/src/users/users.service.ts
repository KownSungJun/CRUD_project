import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from 'src/auth/dto/register.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async findUser(userId: string) {
    const user = await this.userModel.findOne({ userId }).exec();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async createUser(dto: RegisterDto) {
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

    return user.save();
  }
}
