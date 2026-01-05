import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiFindUser } from './swagger/find-user.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('ping')
  pong() {
    return 'pong';
  }

  @ApiFindUser()
  @Get(':userId')
  find(@Param('userId') userId: string) {
    return this.usersService.findByUserIdOrThrow(userId);
  }

  @Patch(':userId')
  update(@Param('userId') userId: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(userId, dto);
  }

  @Delete(':userId')
  delete(@Param('userId') userId: string) {
    return this.usersService.delete(userId);
  }

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.usersService.register(dto);
  }
}
