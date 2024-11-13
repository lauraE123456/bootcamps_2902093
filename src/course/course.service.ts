import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';
import { minimum_Skill } from './dto/minimum_skill.enum';

@Injectable()
export class CourseService {

  constructor(@InjectRepository(Course) private cursoRepository: Repository <Course>,
  @InjectRepository(Bootcamp) private bootcampRepository: Repository <Bootcamp>){

  }

  async create(payload: CreateCourseDto) {
  const { title, description, weeks, tuition, minimun_skill , createdAt, bootcampId } = payload;
  
  const bootcampById = await this.bootcampRepository.findOneBy({ id: bootcampId });
  
  if (!bootcampById) {
    throw new Error("Bootcamp not found");
  }

  const newCurso = new Course();
  newCurso.title = title;
  newCurso.description = description;
  newCurso.weeks = weeks;
  newCurso.tuition = tuition;
  newCurso.minimumSkill = minimun_skill;  // Corregido aquí
  newCurso.createdAt = createdAt;
  newCurso.bootcamp = bootcampById;

  return this.cursoRepository.save(newCurso);
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
