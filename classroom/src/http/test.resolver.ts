import { Get, UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { AuthorizationGuard } from '../http/auth/authorization.guard';
import { PrismaService } from './../database/prisma/prisma.service';

@Resolver('test')
export class TestResolver {
  constructor(private prisma: PrismaService) {}
  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'Hello World';
  }
}
