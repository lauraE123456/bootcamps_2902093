import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';

@Injectable()
export class BootcampsService {

  constructor(@InjectRepository(Bootcamp) 
    private bootcampRepository: Repository <Bootcamp>){

  }
  create(body: CreateBootcampDto) {
    //CREAR UNA INSTACIA DE UNA ENTITY BOOTCAMP
    const newBootcamp= this.
                        bootcampRepository.create(body)
    //RETORNAR Y GRABAR LA INSTACIA NEWBOOTCAMP
    return this.bootcampRepository.save(newBootcamp);
  }

  findAll() {
    return this.bootcampRepository.find()
  }

  async findOne(id: number) {
    const bootcamp = await this.bootcampRepository.findOneBy({id});
    if(!bootcamp){
      throw new NotFoundException(`No existe el bootcamp ${id}`);
    }
      return bootcamp;
  }

  async update(id: number, body: UpdateBootcampDto) {
    const upBootcamps = await
              this.bootcampRepository.findOneBy({id});
    if(!upBootcamps){
      throw new NotFoundException(`No existe el bootcamp ${id}`);
    }
              this.bootcampRepository.merge(upBootcamps, body)
    return this.bootcampRepository.save(upBootcamps)
  }

  async remove(id: number) {
    const delBootcamp = await
              this.bootcampRepository.findOneBy({id});
              if(!delBootcamp){
                throw new NotFoundException(`No existe el bootcamp ${id}`);
              }
              await this.bootcampRepository.delete(id)
    return this.bootcampRepository.save(delBootcamp)
  }
}
