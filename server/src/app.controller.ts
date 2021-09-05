import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { ShortenLinkDto } from './shortenLinkDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/shorten-link')
  async shortenLink(@Body() body: ShortenLinkDto): Promise<string> {
    return await this.appService.shortenLink(body.fullLink);
  }
}
