import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async register(dto: RegisterDto) {
    return this.usersService.createUser(dto);
  }

  async login(dto: LoginDto) {
    const { userId, password } = dto;

    const user = await this.usersService.findUser(userId);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await this.isMatchPassword(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      accessToken: this.jwtService.sign({
        userId: user.id,
        userName: user.userName,
      }),
    };
  }

  private async isMatchPassword(inputPassword: string, dbPassword: string) {
    return bcrypt.compare(inputPassword, dbPassword);
  }
}
