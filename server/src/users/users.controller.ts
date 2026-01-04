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
  async register(@Body() dto: RegisterDto) {
      try {
    // 로그를 추가하여 dto 내용을 확인합니다.
    console.log('Received DTO:', dto);
    return await this.usersService.register(dto);
  } catch (error) {
    console.log(error);  // error 객체에서 메시지를 확인해보세요
    throw new Error('Registration failed');
  }
}
}
