import { Options } from '@mikro-orm/core';

const config: Options = {
    type: 'mongo',
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    clientUrl: process.env.MONGO_CONNECTION_STRING
};

export default config;