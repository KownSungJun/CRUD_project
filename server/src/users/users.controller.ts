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
import { ApiUpdateUser } from './swagger/update-user.decorator';
import { ApiDeleteUser } from './swagger/delete-user.decorator';
import { ApiRegisterUser } from './swagger/register-user.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiFindUser()
  @Get(':userId')
  find(@Param('userId') userId: string) {
    return this.usersService.getUser(userId);
  }

  @ApiUpdateUser()
  @Patch(':userId')
  update(@Param('userId') userId: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(userId, dto);
  }

  @ApiDeleteUser()
  @Delete(':userId')
  delete(@Param('userId') userId: string) {
    return this.usersService.delete(userId);
  }

  @ApiRegisterUser()
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.usersService.register(dto);
  }
}
