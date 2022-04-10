import { ApolloDriver } from '@nestjs/apollo';
// install dependencie for use variables process .env
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { TestResolver } from './test.resolver';
import path from 'node:path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ], // Access variables via process .env
  providers: [TestResolver],
})
export class HttpModule {}
