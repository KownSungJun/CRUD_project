import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findByUserIdOrThrow(id);
  }

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.usersService.register(dto);
  }
}
