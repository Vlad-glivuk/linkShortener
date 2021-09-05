import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';

import { Link } from './entities/Link.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Link) private readonly linkRepository: EntityRepository<Link>) { }

  async shortenLink(fullLink: string): Promise<string> {
    const link = new Link(fullLink);
    await this.linkRepository.persist(link).flush();

    return link.shortId;
  }

  async getFullLink(shortId: string): Promise<string> {
    const link = await this.linkRepository.findOne({ shortId });
    return link.fullLink;
  }
}
