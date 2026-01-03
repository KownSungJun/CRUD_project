import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import { UserDocument } from 'src/users/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login(dto: LoginDto) {
    const { userId, password } = dto;

    const user = await this.usersService.findByUserIdOrThrow(userId);

    const isMatch = await this.isMatchPassword(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return { accessToken: this.generateAccessToken(user) };
  }

  // =========================== private functions ===========================

  private generateAccessToken(user: UserDocument) {
    return this.jwtService.sign(
      {
        userId: user.userId,
        userName: user.userName,
      },
      {
        expiresIn: '1h',
      },
    );
  }

  private async isMatchPassword(inputPassword: string, dbPassword: string) {
    return bcrypt.compare(inputPassword, dbPassword);
  }
}
