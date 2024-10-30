import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
  private userRepository: Repository<User>){

  }
  create(payload: any) {
    //CREAR UNA INSTACIA DE UNA ENTITY BOOTCAMP
    const newUser= this.
                        userRepository.create(payload)
    //RETORNAR Y GRABAR LA INSTACIA NEWBOOTCAMP
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find()
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id:id})
  }

  async update(id: number, payload: any) {
    const upUser = await
              this.userRepository.findOneBy({id});
    //2.hacer update para agregar cambios
              this.userRepository.merge(upUser, payload)
    //grabrar
    return this.userRepository.save(upUser)
  }

  async remove(id: number) {
    const delUser = await
    this.userRepository.findOneBy({id});
    this.userRepository.delete(delUser)
//grabrar
return this.userRepository.save(delUser)
  }
}
