import { Entity, Property } from '@mikro-orm/core';
import * as shortid from 'shortid';

import { BaseEntity } from './Base.entity';

@Entity()
export class Link extends BaseEntity {

    @Property()
    fullLink: string;

    @Property()
    shortId: string;

    constructor(fullLink: string) {
        super();
        this.fullLink = fullLink;
        this.shortId = shortid.generate();
    }

}