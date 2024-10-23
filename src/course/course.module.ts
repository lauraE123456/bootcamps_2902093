import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { course } from './entities/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [ TypeOrmModule.forFeature([ course ]) ],

  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
