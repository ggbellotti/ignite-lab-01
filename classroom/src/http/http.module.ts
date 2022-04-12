import { ApolloDriver } from '@nestjs/apollo';
// install dependencie for use variables process .env
import { ConfigModule } from '@nestjs/config';
import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { CoursesService } from './../services/courses.service';
import { DatabaseModule } from '../database/database.module';
import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver';
import { EnrollmentsService } from 'src/services/enrollments.service';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { StudentsResolver } from './graphql/resolvers/students.resolver';
import { StudentsService } from 'src/services/students.service';
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
  providers: [
    // Resolvers
    CoursesResolver,
    EnrollmentsResolver,
    StudentsResolver,

    // Services
    CoursesService,
    EnrollmentsService,
    StudentsService,
  ],
})
export class HttpModule {}
