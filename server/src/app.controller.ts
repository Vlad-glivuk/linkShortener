import { Controller, Get, Post, Body, Param, HttpCode, Res, Req, HttpException, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { ShortenLinkDto } from './shortenLinkDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/shorten-link')
  @HttpCode(201)
  async shortenLink(@Req() req, @Body(new ValidationPipe()) body: ShortenLinkDto): Promise<string> {
    const shortId = await this.appService.shortenLink(body.fullLink);
    return `${req.protocol}://${req.hostname}:${process.env.PORT}/${shortId}`;
  }

  @Get('/:shortId')
  @HttpCode(302)
  async getFullLink(@Res() res, @Param('shortId') shortId: string): Promise<void> {
    const fullLink = await this.appService.getFullLink(shortId);
    res.redirect(fullLink);
  }
}
