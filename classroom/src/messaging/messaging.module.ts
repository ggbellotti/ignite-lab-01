import { CoursesService } from './../services/courses.service';
import { DatabaseModule } from './../database/database.module';
import { EnrollmentsService } from './../services/enrollments.service';
import { Module } from '@nestjs/common';
import { PurchaseController } from './controllers/purchases.controller';
import { StudentsService } from './../services/students.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [StudentsService, CoursesService, EnrollmentsService],
})
export class MessagingModule {}
