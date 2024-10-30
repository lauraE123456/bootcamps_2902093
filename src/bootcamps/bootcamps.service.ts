import { Injectable } from '@nestjs/common';
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
  create(payload: any) {
    //CREAR UNA INSTACIA DE UNA ENTITY BOOTCAMP
    const newBootcamp= this.
                        bootcampRepository.create(payload)
    //RETORNAR Y GRABAR LA INSTACIA NEWBOOTCAMP
    return this.bootcampRepository.save(newBootcamp);
  }

  findAll() {
    return this.bootcampRepository.find()
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id:id});
  }

  async update(id: number, payload: any) {
    //1. traer por id
    const upBootcamps = await
              this.bootcampRepository.findOneBy({id});
    //2.hacer update para agregar cambios
              this.bootcampRepository.merge(upBootcamps, payload)
    //grabrar
    return this.bootcampRepository.save(upBootcamps)
  }

  async remove(id: number) {
    const delBootcamp = await
              this.bootcampRepository.findOneBy({id});
              this.bootcampRepository.delete(delBootcamp)
    //grabrar
    return this.bootcampRepository.save(delBootcamp)
  }
}
