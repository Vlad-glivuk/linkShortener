import { Controller, Get, Post, Body, Param, HttpCode, Res, HttpException, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { ShortenLinkDto } from './shortenLinkDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/shorten-link')
  @HttpCode(201)
  async shortenLink(@Body(new ValidationPipe()) body: ShortenLinkDto): Promise<string> {
    return await this.appService.shortenLink(body.fullLink);
  }

  @Get('/:shortId')
  @HttpCode(302)
  async getFullLink(@Res() res, @Param('shortId') shortId: string): Promise<void> {
    const fullLink = await this.appService.getFullLink(shortId);
    res.redirect(fullLink);
  }
}
