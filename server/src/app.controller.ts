import { Controller, Get, Next, Req, Res } from '@nestjs/common';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('*')
  serveApp(@Req() req, @Res() res, @Next() next) {
    if (req.path.startsWith('/api')) {
      return next();
    }

    res.sendFile(join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
  }
}
