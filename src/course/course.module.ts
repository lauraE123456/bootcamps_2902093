import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { Course } from './entities/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';


@Module({
  imports: [ TypeOrmModule.forFeature([ Course, Bootcamp ]) ],

  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
