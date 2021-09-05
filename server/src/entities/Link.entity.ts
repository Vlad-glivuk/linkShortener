import { Entity, Property} from '@mikro-orm/core';

import { BaseEntity } from './Base.entity';
import * as shortid from 'shortid';

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