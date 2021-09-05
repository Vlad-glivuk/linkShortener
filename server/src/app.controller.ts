import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';

import { AppService } from './app.service';
import { ShortenLinkDto } from './shortenLinkDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/shorten-link')
  @HttpCode(201)
  async shortenLink(@Body() body: ShortenLinkDto): Promise<string> {
    return await this.appService.shortenLink(body.fullLink);
  }

  @Get('/get-full-link/:shortId')
  async getFullLink(@Param('shortId') shortId: string): Promise<string> {
    return await this.appService.getFullLink(shortId);
  }
}
