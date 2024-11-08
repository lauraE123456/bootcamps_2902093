import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {

  constructor(@InjectRepository(Course)
  private cursoRepository: Repository <Course>){

  }

  create(payload: CreateCourseDto) {
    const newCurso= this.cursoRepository.create(payload)
    return this.cursoRepository.save(newCurso)
  }

  findAll() {
    return this.cursoRepository.find();
  }

  findOne(id: number) {
    return this.cursoRepository.findOneBy({id:id})
  }

  
  async update(id: number, payload: UpdateCourseDto) {
    const upCourse = await
              this.cursoRepository.findOneBy({id});
              this.cursoRepository.merge(upCourse,payload)
              return this.cursoRepository.save(upCourse)
    
  }


  async remove(id: number) {
    const delCourse =await
            this.cursoRepository.findOneBy({id})
            this.cursoRepository.delete(delCourse)
    return this.cursoRepository.save(delCourse)
  }
}
