import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto, @Res({ passthrough: true }) res) {
    const token = this.authService.login(dto);

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: true,
    });

    return { ok: true };
  }
}
