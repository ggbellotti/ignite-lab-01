import { CurrentUser, AuthUser } from './../../auth/current-user';
import { EnrollmentsService } from 'src/services/enrollments.service';
import { Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { AuthorizationGuard } from './../../auth/authorization.guard';
import { Student } from '../models/student';
import { StudentsService } from '../../../services/students.service';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Student)
export class StudentsResolver {
  constructor(
    private studentsService: StudentsService,
    private enrollmentsService: EnrollmentsService,
  ) {}

  // @Query(() => Student)
  // @UseGuards(AuthorizationGuard)
  // me(@CurrentUser() user: AuthUser) {
  //   return this.studentsService.getStudentsByAuthUserId(user.sub);
  // }

  @Query(() => [Student])
  @UseGuards(AuthorizationGuard)
  students() {
    return this.studentsService.listAllStudents();
  }

  @ResolveField()
  enrollments(@Parent() student: Student) {
    return this.enrollmentsService.listEnrollmentsByStudent(student.id);
  }
}
