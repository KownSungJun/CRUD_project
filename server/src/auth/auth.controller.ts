import { Controller, Post, Body, Res, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiLogin } from './swagger/api-login.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiLogin()
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res) {
    const token = await this.authService.login(dto);

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: true,
    });

    return { ok: true };
  }
}
