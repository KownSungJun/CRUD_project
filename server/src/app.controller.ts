import { Controller, Get, Req, Res } from '@nestjs/common';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('*')
  serveApp(@Req() req, @Res() res) {
    if (req.path.startsWith('/api')) return;
    res.sendFile(join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
  }
}
