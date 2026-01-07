import { Controller, Get, Next, Req, Res } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { join } from 'path';

@ApiExcludeController()
@Controller()
export class AppController {
  @Get('*path')
  serveApp(@Req() req, @Res() res, @Next() next) {
    if (req.path.startsWith('/api')) {
      return next();
    }

    res.sendFile(join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
  }
}
